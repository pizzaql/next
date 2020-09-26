const presets = [
	['next/babel', {
		'preset-env': {
			targets: {
				esmodules: true
			},
			corejs: '3.6',
			useBuiltIns: 'usage'
		}
	}]
];

const plugins = [
	'emotion'
]

module.exports = {presets, plugins};
