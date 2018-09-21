import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import OfflinePlugin from 'offline-plugin';

module.exports = {
	entry: {
		app: [
			'./src/app.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js'
	},
	stats: 'minimal',
	devServer: {
		compress: true,
		stats: 'minimal'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						'@babel/preset-env'
					]
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'clean-css-loader'
				]
			},
			{
				test: /\.html$/,
				use: [
					'html-loader'
				]
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new ScriptExtHtmlWebpackPlugin({
			prefetch: /\.js$/,
			defaultAttribute: 'async'
		}),
		/* eslint-disable camelcase */
		new WebpackPwaManifest({
			name: 'kepinski.me',
			short_name: 'kepinski',
			description: 'Personal Website of Antoni Kepinski',
			background_color: '#212121',
			theme_color: '#212121',
			inject: true,
			ios: true,
			icons: [
				{
					src: path.resolve('src/images/rocket-192.png'),
					size: '192x192',
					ios: true
				},
				{
					src: path.resolve('src/images/rocket-512.png'),
					size: '512x512'
				}
			]
		}),
		new OfflinePlugin()
	]
};
