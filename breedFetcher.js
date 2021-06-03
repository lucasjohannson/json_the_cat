
const request = require('request');

//console.log(url)

const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //const content = body; // Print the HTML for the Google homepage.

    if(error){
      //callback(error, null);
      callback(error, null);
    }

    const data = JSON.parse(body)[0];

    if(data){
      callback(null, data["description"]);
      console.log("here");

    }else {
      callback("breed not found", null);
    }

    // return callback(null, data[0]["description"]);

    

  });

};

module.exports = {fetchBreedDescription};
