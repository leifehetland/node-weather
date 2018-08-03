const request = require('request');

let getWeather = (latitude, longitude, callback) => {
	request({
		url: `https://api.darksky.net/forecast/bb6b42f9e55b85a838aa3ee2b747dc84/${latitude},${longitude}`,
		json: true
	}, (err, res, body) => {
		if (!err && res.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather.');
		}
	});
}

module.exports.getWeather = getWeather;