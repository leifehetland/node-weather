const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=%20stavanger%20norway',
	json: true
}, (error, response, body) => {
	console.log(body);
});