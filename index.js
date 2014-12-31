var orchestraApi = require('orchestra-api')
	, orchestraClient = require('orchestra-client')
	, express = require('express')
	, app = express();

app.use('/api', orchestraApi);
app.use('/', orchestraClient);
app.listen(8080);

/*
require('node-thrust')(function(err, api) {

	var window = api.window({
		root_url: 'http://google.com'
		, size: {
			width: 1024
			, height: 768
		}
	});
	
	window.on('closed', function() {
		process.exit(0);
	});
	
	window.show();
});
*/