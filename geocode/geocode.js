const request = require('request');

 var geocodeAddress = (locationString, callback) => {
  var encodedAddress = encodeURIComponent(locationString);
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body)=> {
    if(error){
      callback("Unable to connect to service.");
    }
    if(body.status === "ZERO_RESULTS"){
      callback("No hits for search.");
    }else if(body.status === "OK") {
      callback(undefined, {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      })
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;
