const request = require('request');

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (err, res) => {
	if (err) {
		console.log(err);
	} else {
		console.log(res.address);	
		weather.getWeather(res.latitude, res.latitude, (err, weatherRes) => {
			if (err) {
				console.log(err);
			} else {
				console.log(`It's currently ${weatherRes.temperature} degrees and it feels like ${weatherRes.apparentTemperature} degrees.`);
			}
		});
	}
});
