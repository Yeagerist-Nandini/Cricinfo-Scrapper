const { replaceElement } = require('domutils');
const request=require('request');

console.log('before');


request("https://www.worldometers.info/coronavirus/",cb);


function cb(error,response,html) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', html); // Print the HTML for the Google homepage.
}


console.log("after"); 


//request response cycle 
//whenever we search some site on browser it sends request to the server of that site and the server sends the html etc in the response
// same with node.js .It is an enviroment sp if it sends response then it can send request too.
//And then we use cheerio module to parse and get the html 
//then  organise the data in excel or pdf using some modules
