const request = require('request');

const darkskyKey = 'bf63c904d6a6a6f8233ff2adcca6f5ca';

var getWeather = (location, callback) => {

  var requestUrl = `https://api.darksky.net/forecast/${darkskyKey}/${location.lat},${location.lng}`;
  request({
    url: requestUrl,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode == 200){
      callback(body.currently.summary);
    }else{
      callback("Unable to load results.");
    }
  });
};

module.exports.getWeather = getWeather;
