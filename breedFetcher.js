const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
console.log(url)

request(url, (error, response, body) => {
  console.log('error: bad url', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //const content = body; // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  // console.log(body);
  // console.log(typeof body)
  if(data.length > 1){
    console.log(data[0]["description"]);
  }else{
    console.log("breed not found");
  }


});
