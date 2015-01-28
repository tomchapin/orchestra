#!/bin/bash

echo '---------------------------'
echo '       AFTER INSTALL       '
echo '           START           '
echo '---------------------------'

# Prepare the client:
echo "---- Prepare orchestra-client for nw.js ----"
( cd node_modules/orchestra-client && npm install )
( cd node_modules/orchestra-client && node_modules/.bin/gulp clean prepare-node-webkit )

# Rebuild native modules:
echo "---- Rebuild native node modules using nw-gyp for nw.js $NW_VERSION ----"
npm install nw-gyp -g

NATIVE_MODULE_PATHS=(
	'node_modules/orchestra-client/node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-stringprep'
	'node_modules/orchestra-client/node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core/node_modules/ltx/node_modules/node-expat'
	'node_modules/orchestra-client/node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core/node_modules/node-stringprep'
)

for NATIVE_MODULE_PATH in ${NATIVE_MODULE_PATHS[@]}
do
	echo "---- Rebuild $NATIVE_MODULE_PATH ----"
	( cd $NATIVE_MODULE_PATH && nw-gyp configure --target="$NW_VERSION" && nw-gyp build )
done

echo '---------------------------'
echo '       AFTER INSTALL       '
echo '            END            '
echo '---------------------------'
