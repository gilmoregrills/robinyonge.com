var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/prod');
var APP_DIR = path.resolve(__dirname, 'src/dev');

var config = {
	entry: ["babel-polyfill", APP_DIR + '/index.jsx'],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders : [
			{
				test : /\.jsx$/,
				include : APP_DIR,
				use: 'babel-loader',

	        },
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?importLoaders=1',
				/*	'postcss-loader',*/
				],

			},
			{
				test: /\.scss$/,
				loader: 'sass-loader'
			}
        ]
	},
};

module.exports = config;
