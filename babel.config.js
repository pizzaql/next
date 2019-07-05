const presets = [
	['babel-preset-gatsby', {
		targets: {
			esmodules: true
		},
		corejs: 3,
		useBuiltIns: 'usage'
	}]
];

module.exports = {presets};
