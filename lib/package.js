var NwBuilder = require('node-webkit-builder')
	, nw = new NwBuilder({
		files: '../**',
		version: '0.11.6',
		//platforms: ['osx32', 'osx64', 'win32', 'win64']
		platforms: ['osx64']
	});

//Log stuff you want
nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
	console.log('all done!');
}).catch(function (error) {
	console.error(error);
});
