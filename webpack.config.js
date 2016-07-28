var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var APP = __dirname + '/app';
var BUILD = __dirname + '/build';
var output = {};

var plugins = [ ];

plugins.push(new CopyWebpackPlugin([{
	from: 'index.html',
	to: '../build/'
}]));
output = {
	path: BUILD,
	filename: 'bundle.js'
};

module.exports = {
	context: APP,
	entry: './index.jsx',
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015!jshint-loader?esversion=6',
				exclude: /node_modules|bower_components/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.(woff2?|svg)$/,
				loader: 'url?limit=10000'
			},
			{
				test: /\.(ttf|eot)$/,
				loader: 'file'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			}
		]
	},
	plugins: plugins,
	output: output,
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
