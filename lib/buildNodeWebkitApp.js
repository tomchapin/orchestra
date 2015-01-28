var NwBuilder = require('node-webkit-builder')
	, nw = new NwBuilder({
		files: [
			__dirname + '/../**'
			, '!' + __dirname + '/../**/*.iml'
			, '!' + __dirname + '/../cache/**'
			, '!' + __dirname + '/../build/**'
			, '!' + __dirname + '/../node_modules/node-webkit-builder/**'
			, '!' + __dirname + '/../node_modules/jade/**'
			, '!' + __dirname + '/../node_modules/filesize/**'
			, '!' + __dirname + '/../node_modules/orchestra-client/node_modules/.bin/**'
			, '!' + __dirname + '/../node_modules/orchestra-client/node_modules/gulp*/**'
			, '!' + __dirname + '/../node_modules/orchestra-client/node_modules/express/**'
			, '!' + __dirname + '/../node_modules/orchestra-client/node_modules/tiny-lr/**'
			, '!' + __dirname + '/../node_modules/orchestra-client/node_modules/jshint-stylish/**'
		],
		version: '0.11.6',
		//platforms: ['osx32', 'osx64', 'win32', 'win64']
		platforms: ['osx32']
	});

//Log stuff you want
nw.on('log',  console.log);

// Build returns a promise
nw.build().then(function () {
	console.log('all done!');
}).catch(function (error) {
	console.error(error);
});
