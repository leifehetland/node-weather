let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof(a) === 'number' && typeof(b) === 'number') {
				resolve(a + b);
			} else {
				reject('Arguments must be number.');
			}
		}, 1500);
	}); 
}

// Error can't be handled on the chaining this way
// asyncAdd(2, 3).then((res) => {
// 	console.log('Result: ', res);
// 	return asyncAdd(res, 10);
// }, (errorMessage) => {
// 	console.log(errorMessage);
// }).then((res) => {
// 	console.log('Should be 15: ', res);
// }, (errorMessage) => {
// 	console.log(errorMessage);
// });

// Catch to help with chaining
asyncAdd(2, 3).then((res) => {
	console.log('Result: ', res);
	return asyncAdd(res, 10);
}).then((res) => {
	console.log('Should be 15: ', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

let somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('It worked.');
		// reject('Unable to fulfill promise.');
	}, 2500);
});

somePromise.then((message) => {
	console.log('Success: ', message);
}, (errorMessage) => {
	console.log('Error: ', errorMessage);
});