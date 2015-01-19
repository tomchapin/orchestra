# Orchestra
![Codeship](https://codeship.com/projects/60a7a940-81fd-0132-b737-2e1fa562aa85/status?branch=master)

Crossplatform desktop application using [nw.js](https://github.com/nwjs/nw.js) to control Logitech Harmony Hubs.

## Modules

* [orchestra-client](https://github.com/swissmanu/orchestra-client)
* [orchestra-jsapi](https://github.com/swissmanu/orchestra-jsapi)


## Modules to rebuild using nw-gyp

```bash
npm install -g nw-gyp
nw-gyp configure --target=0.11.5  # or whatever nw.js version is used

# traverse the folders from below and run:
nw-gyp build
```

* `node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-stringprep`
* `node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core/node_modules/ltx/node_modules/node-expat`
* `node_modules/orchestra-jsapi/node_modules/harmonyhubjs-client/node_modules/node-xmpp-core/node_modules/node-stringprep`
