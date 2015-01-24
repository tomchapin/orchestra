#!/bin/sh

# Prepare the client:
echo '---- Prepare orchestra-client for nw.js ----'
( cd node_modules/orchestra-client && node_modules/.bin/gulp clean prepare-node-webkit )

# Rebuild native modules:
echo '---- Rebuild native node modules using nw-gyp ----'
npm install nw-gyp -g
( cd node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-stringprep && nw-gyp configure --target=$NW_VERSION && nw-gyp build )
( cd node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core/node_modules/ltx/node_modules/node-expat && nw-gyp configure --target=$NW_VERSION && nw-gyp build )
( cd node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core/node_modules/node-stringprep && nw-gyp configure --target=$NW_VERSION && nw-gyp build )
