const cheerio = require('cheerio');
const request=require('request');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";


console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}


function extractHTML(html) {
    let $ = cheerio.load(html);
    // full page search
    let teamsArr = $(".match-info.match-info-MATCH .team");
    let wTeamName;

    for (let i = 0; i < teamsArr.length; i++) {
        let hasclass = $(teamsArr[i]).hasClass("team-gray");
        if (hasclass == false) {
            // find 
            let teamNameElem = $(teamsArr[i]).find(".name");
            wTeamName = teamNameElem.text().trim();
        }
    }
   
    let innigsArr = $(".card.content-block.match-scorecard-table>.Collapsible");
    let htmlStr = "";

    for (let i = 0; i < innigsArr.length; i++) {
        let cHtml = $(innigsArr[i]).html();
        htmlStr += cHtml;
    
        let teamNameElem = $(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
       
        let tableElem = $(innigsArr[i]).find(".table.batsman");
        let allBatsman = $(tableElem).find("tr");

        for (let j = 0; j < allBatsman.length; j++) {
            let allColsOfPlayer = $(allBatsman[j]).find("td");
            let isBatsman=$(allColsOfPlayer[0]).hasClass("batsman-cell");
            
            if(isBatsman)
            {
                let playerName=$(allColsOfPlayer[0]).text();
                let href=$(allColsOfPlayer[0]).find('a').attr("href");
                let fullLink="https://www.espncricinfo.com"+href;

                getBirthdayPage(fullLink,playerName,teamName);
            }
        }

    }
    // console.log(htmlStr);
}



function getBirthdayPage(url,name,teamName)
{
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }
        else{
            extractBirthday(html,name,teamName);
        }
    }
}

function extractBirthday(html,name,teamName)
{
    let $=cheerio.load(html);
    let detailsArr=$(".player-card-description");
    let birthday=$(detailsArr[1]).text();
    console.log(`${name} plays for ${teamName} was born on ${birthday}`)
}