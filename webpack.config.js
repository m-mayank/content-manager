var path = require('path'), 
	pkg = require('./package.json'), 
	Webpack = require('webpack'), 
	HTMLWebpackPlugin = require('html-webpack-plugin'), 
	CopyWebpackPlugin = require('copy-webpack-plugin'), 
	UglifyJSPlugin = require('uglifyjs-webpack-plugin');
	nodeExternals = require('webpack-node-externals');
module.exports = function(env) {
	env = env || {};
	return {
		devServer : {
			contentBase : './dist',
			proxy : {
				'/user/*' : {
					target : 'http://jsonplaceholder.typicode.com/posts/',
					secure : false,
					changeOrigin : true,
					pathRewrite : {
						"^/user" : ""
					}
				}
			}
		},
		resolve: {
			alias : {
				appVent : path.resolve(__dirname, 'src/appVent'),
				appConstants : path.resolve(__dirname, 'src/appConstants'),
				models : path.resolve(__dirname, 'src/models/'),
				collections : path.resolve(__dirname, 'src/collections/'),
				views : path.resolve(__dirname, 'src/views/'),
				templates : path.resolve(__dirname, 'src/templates/')
			}
		},
		devtool : (env.prod) ? false : 'inline-source-map',
		entry : {
			app : "./src/app.js",
			vendor : Object.keys(pkg.dependencies).filter(function(key) {
				return (key !== 'handlebars')
			})
		},
		output : {
			filename : 'bundle.js',
			path : path.resolve(__dirname, 'dist')
		},
		module : {
			loaders : [ {
				test : /\.hbs$/,
				exclude : /(node_modules|bower_components)/,
				loader : 'handlebars-loader'
			}, {
				test : /\.css$/,
				use : [ 'style-loader', 'css-loader' ]
			} ]
		},
		node: {
			fs: 'empty'
		},
		plugins : [ new Webpack.optimize.CommonsChunkPlugin({
			name : 'vendor',
			filename : 'vendor.bundle.js'
		}), new Webpack.ProvidePlugin({
			'$' : 'jquery',
			'jQuery' : 'jquery',
			'_' : 'underscore',
			'Backbone' : 'backbone',
			'Marionette' : 'backbone.marionette',
			'Backbone.Stickit' : 'backbone.stickit',
			'Backbone.Validation' : 'backbone-validation',
			'Radio' : 'backbone.radio'
		}), new HTMLWebpackPlugin({
			template : './src/app.html'
		}), new CopyWebpackPlugin([ {
			context : 'src/data/',
			from : '**/*.*',
			to : path.resolve(__dirname, 'dist/data')
		}, {
			context : 'src/images/',
			from : '**/*.*',
			to : path.resolve(__dirname, 'dist/images')
		}, {
			context : 'vendor/',
			from : '**/*.*',
			to : path.resolve(__dirname, 'dist/vendor')
		} ]), new UglifyJSPlugin({
			sourceMap : true
		}) ]
	};
}