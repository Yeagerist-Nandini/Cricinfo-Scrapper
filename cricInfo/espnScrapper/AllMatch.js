const request = require("request");
const cheerio = require("cheerio");
const scoreCardObj = require("./scorecard");
function getAllMatchesLink(url) {
    request(url,cb);
}

function cb(err, response, html) {
    if (err) {
        console.log(err);
    }
    else {
        extractAllLinks(html);
    }
}


function extractAllLinks(html) {
    let $ = cheerio.load(html);
    let scorecardElems = $("a[data-hover='Scorecard']");
    for (let i = 0; i < scorecardElems.length; i++) {
        let link = $(scorecardElems[i]).attr("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        console.log(fullLink);
        scoreCardObj.ps(fullLink);
        // 
    }
}
module.exports = {
    gAlmatches: getAllMatchesLink
}
// how to use json 
// objects similar to js but we cant use function in json object we can also use arr of obj
//json is a way of store and transmmit data 