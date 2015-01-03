var orchestraApi = require('orchestra-api')
	, orchestraClient = require('orchestra-client')
	, app = require('express')();

app.use('/', orchestraClient);
app.use('/', orchestraApi);
app.listen(8080, '127.0.0.1', function() {
	var app = require('app');  // Module to control application life.
	var BrowserWindow = require('browser-window');  // Module to create native browser window.

	// Keep a global reference of the window object, if you don't, the window will
	// be closed automatically when the javascript object is GCed.
	var mainWindow = null;

	// Quit when all windows are closed.
	app.on('window-all-closed', app.quit);

	// This method will be called when atom-shell has done everything
	// initialization and ready for creating browser windows.
	app.on('ready', function() {
		// Create the browser window.
		mainWindow = new BrowserWindow({width: 800, height: 600});

		// and load the index.html of the app.
		mainWindow.loadUrl('http://127.0.0.1:8080');

		// Emitted when the window is closed.
		mainWindow.on('closed', function() {
			// Dereference the window object, usually you would store windows
			// in an array if your app supports multi windows, this is the time
			// when you should delete the corresponding element.
			mainWindow = null;
		});
	});
	
	
});
