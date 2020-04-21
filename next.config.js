const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');

const nextConfig = {
	webpack(config) {
		config.module.rules[0].use = [
			config.module.rules[0].use,
			{
				loader: 'linaria/loader',
				options: {
					sourceMap: process.env.NODE_ENV !== 'production'
				}
			}
		];

		return config;
	},
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	},
	reactStrictMode: true,
	experimental: {
		modern: true,
		reactMode: 'concurrent',
		reactRefresh: true
	}
};

module.exports = withPlugins([withCSS, withOptimizedImages, withFonts, withOffline], nextConfig);
