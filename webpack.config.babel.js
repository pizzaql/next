import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import ResourceHintWebpackPlugin from 'resource-hints-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import SizePlugin from 'size-plugin';

module.exports = {
	entry: {
		app: [
			'@babel/polyfill',
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
					'postcss-loader'
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
		new SizePlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'async'
		}),
		new ResourceHintWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new CleanWebpackPlugin(['build'])
	]
};
