const FontFaceObserver = require('fontfaceobserver');

// Load fonts
const Fonts = () => {
	const link = document.createElement('link');
	link.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400';
	link.rel = 'stylesheet';

	document.head.appendChild(link);

	const roboto = new FontFaceObserver('Roboto Mono');

	try {
		roboto.load().then(() => {
			document.documentElement.classList.add('fonts="loaded"');
			console.log('Fonts loaded!');
		});
	} catch (error) {
		document.documentElement.classList.add('fonts="error"');
	}
};

export default Fonts;
