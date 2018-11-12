const FontFaceObserver = require('fontfaceobserver');
const consola = require('consola');

const Fonts = () => {
	const link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	const roboto = new FontFaceObserver('Roboto Mono');

	try {
		roboto.load().then(() => {
			document.documentElement.classList.add('loaded');
			consola.success('Fonts loaded!');
		});
	} catch (error) {
		consola.error(new Error('Failed loading fonts!'));
	}
};

export default Fonts;
