let fs = require("fs");
let xlsx=require("xlsx");
// let buffer=fs.readFileSync("./example.json");

// console.log(buffer);
// console.log("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
// let data=JSON.parse(buffer);

let data=require("./example.json");
// console.log(data);

// data.push({
//      "name":"nandini",
//      "age":19,
//      "gender":"female",
//      "subject":["os","se","cn","maths"]
// });

// let stringData=JSON.stringify(data);
// fs.writeFileSync("example.json",stringData);

// file->workbook->sheets->rows->columns
//wb=>filepath, ws=>name, json data

//new worksheet
// let newWB=xlsx.utils.book_new();
//json data-> excel format convert
// let newWS=xlsx.utils.json_to_sheet(data);
//new wb, ws , sheet name
// xlsx.utils.book_append_sheet(newWB,newWS,"sheet1");
//filePath
// xlsx.writeFile(newWB,"abc.xlsx");


//read
//get workbook
let wb=xlsx.readFile("abc.xlsx");
//sheet
let excelData=wb.Sheets["sheet1"];
// get sheet data 
let ans=xlsx.utils.sheet_to_json(excelData);
console.log(ans);

// function excelWriter(filePath,json,sheetName)
// {
//     let newWB=xlsx.utils.book_new();
//     let newWS=xlsx.utils.json_to_sheet(json);
//     xlsx.utils.book_append_sheet(newWB,newWS,sheetName);
//     xlsx.writeFile(newWB,filePath);
// }


function excelReader(filePath,sheetName)
{
    if(fs.existsSync(filePath)==false)
    {
        return [];
    }
    let wb=xlsx.readFile(filePath);
    let excelData=wb.Sheets[sheetName];
    let ans=xlsx.utils.sheet_to_json(excelData);
    return ans;
}