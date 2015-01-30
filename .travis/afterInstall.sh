#!/bin/bash

echo '---------------------------'
echo '       AFTER INSTALL       '
echo '           START           '
echo '---------------------------'

# Prepare the client:
echo "---- Prepare orchestra-client for nw.js ----"
( cd node_modules/orchestra-client && npm install )
( cd node_modules/orchestra-client && node_modules/.bin/gulp clean prepare-node-webkit )

# Use "not yet released" version of ltx:
echo "---- Install unreleased version of ltx ----"
( cd node_modules/orchestra-client/node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core && rm -fr node_modules/ltx && npm install git://github.com/swissmanu/ltx.git#cdata-for-ltx-parser --ignore-scripts )

echo '---------------------------'
echo '       AFTER INSTALL       '
echo '            END            '
echo '---------------------------'
