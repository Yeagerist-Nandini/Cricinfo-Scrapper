//in this activity we will print the last ball commentry                                   
//initially loaded content ko hi scrap kr skte h cheerio k through 


const cheerio = require('cheerio');
const request=require('request');

console.log('before');

const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request(url,cb);
function cb(error,response,html) {
    if(error)
    {
        console.error('error:', error);
    }
    else{ 
        handleHtml(html);
    }
}

function handleHtml(html) {
    let $=cheerio.load(html);
    let contentArr=$('.d-flex.match-comment-padder.align-items-center .match-comment-long-text');
    let data =$(contentArr[0]).text();
    let htmldata=$(contentArr[0]).html();
    console.log(data);
    console.log(htmldata);
}


console.log('after');
