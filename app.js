const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for.',
      string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.a, (errorMessage, result) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    //console.log(JSON.stringify(result, undefined, 4));
    weather.getWeather(result, (message) =>{
      console.log(message);
    });
  }

});
