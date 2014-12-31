var orchestraApi = require('orchestra-api')
	, orchestraClient = require('orchestra-client')
	, app = require('express')();

app.use('/', orchestraClient);
app.use('/api', orchestraApi);
app.listen(8080, '127.0.0.1', function() {
	console.log('listen');
	require('node-thrust')(function(err, api) {
		var window = api.window({
			root_url: 'http://127.0.0.1:8080'
			, size: {
				width: 1024
				, height: 768
			}
		});
		
		window.on('closed', function() {
			process.exit(0);
		});

		window.open_devtools(function() {
			window.show();
		});
	});
	
});
