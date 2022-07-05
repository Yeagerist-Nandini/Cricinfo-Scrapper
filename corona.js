const cheerio = require('cheerio');
const request = require('request');
// const chalk=createChalk();

console.log('before');


request("https://www.worldometers.info/coronavirus/", cb);


function cb(error, response, html) {
    if (error) {
        console.error('error:', error);
    }
    else {
        handleHtml(html);
    }
}

function handleHtml(html) {
    //in seltool we are getting the whole html of a page
    let seltool = cheerio.load(html);
    // console.log(seltool.text());  //converts html into text
    let contentArr = seltool('#maincounter-wrap span');


    let totalCases = seltool(contentArr[0]).text();
    let totalDeaths = seltool(contentArr[1]).text();
    let totalRecover = seltool(contentArr[2]).text();

    console.log(('Total Cases '+ totalCases));
    console.log(('Total Deaths '+totalDeaths));
    console.log(('Total Recoveries '+ totalRecover));

    // console.log(chalk.gray('Total Cases '+ totalCases));
    // console.log(chalk.red('Total Deaths '+totalDeaths));
    // console.log(chalk.green('Total Recoveries '+ totalRecover));
}

console.log("after");

//agar hum html hi nhi laate to cheerio kispe lagate to thats why we need request
//cheerio bolta h ki koi bhi selector laake do m use text m badal dunga
