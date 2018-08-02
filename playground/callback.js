let getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'Glitchyphus'
	};
	
	setTimeout(() => {
		callback(user);
	}, 2500); 
};

getUser(42, (userObj) => {
	console.log(userObj);
	console.log(userObj.name);
});