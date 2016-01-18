var webpack = require('webpack');
var path = require('path')

module.exports = {
	entry: './index.js',
	output: {
    path: __dirname,
    filename: 'bundle.js'
	},
	resolve: {
		root: path.resolve('./')
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
			 	loader: 'babel',
			 	exclude: /node_modules/,
			 	include: __dirname,
			 	query: {
			 		presets: [ 'react', 'es2015' ]
			 	}
		 	}
		]
	}
}