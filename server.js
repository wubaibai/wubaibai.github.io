/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

import webpack from 'webpack';
import express from 'express';
import history from 'connect-history-api-fallback';
import httpProxy from 'http-proxy';
import ip from 'ip';

import { API_ENDPOINT, SELF_HOST_ENDPOINT, HOST_MAP, API_PORT, HOST_PORT } from './config/endpoint';

import config from './webpack.config';

const host = HOST_MAP[process.env.PROXY];

const app = express();
const compiler = webpack(config);

app.use(history());

app.use(
	require('webpack-dev-middleware')(compiler, {
		publicPath: config.output.publicPath,
		stats: {
			chunks: false,
			colors: true,
		},
	}),
);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(3000, err => {
	if (err) {
		return console.error(err);
	}

	const proxyServer = httpProxy.createProxyServer({
		target: host,
		changeOrigin: true,
	});

	proxyServer.on('proxyReq', proxyReq => {
		proxyReq.setHeader('Origin', host);
	});

	proxyServer.on('proxyRes', proxyRes => {
		proxyRes.headers['Access-Control-Allow-Headers'] = 'content-type, authorization';
		proxyRes.headers['Access-Control-Allow-Methods'] = 'PUT, POST, GET, DELETE';
		proxyRes.headers['Access-Control-Allow-Origin'] = SELF_HOST_ENDPOINT;
	});

	proxyServer.listen(API_PORT);

	console.log('\x1b[36m%s\x1b[0m', `Proxy server started at ${API_ENDPOINT}`);
	console.log('\x1b[36m%s\x1b[0m', `Tunnel started at http://${ip.address()}:${HOST_PORT}`);

	return console.log('\x1b[36m%s\x1b[0m', `Local server started at ${SELF_HOST_ENDPOINT}`);
});
