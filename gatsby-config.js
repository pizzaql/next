/* eslint-disable camelcase */
module.exports = {
	siteMetadata: {
		title: 'Antoni Kepinski',
		description: 'My name is Antoni Kepinski, I am Full Stack Developer from Poland.',
		author: '@dokwadratu'
	},
	pathPrefix: '/img',
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Antoni Kepinski',
				short_name: 'kepinski',
				start_url: '/',
				background_color: '#212121',
				theme_color: '#212121',
				display: 'standalone',
				icon: 'static/img/favicon.png'
			}
		},
		'gatsby-plugin-offline'
	]
};
