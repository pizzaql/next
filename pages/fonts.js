import FontFaceObserver from 'fontfaceobserver';

// Load fonts
const fonts = async () => {
	const link = await document.createElement('link');
	link.href = await 'https://fonts.googleapis.com/css?family=Roboto+Mono:400';
	link.rel = await 'stylesheet';

	document.head.append(link);

	const roboto = await new FontFaceObserver('Roboto Mono');

	try {
		roboto.load().then(() => {
			document.documentElement.classList.add('fonts="loaded"');
			console.log('Fonts loaded!');
		});
	} catch (error) {
		document.documentElement.classList.add('fonts="error"');
	}
};

export default fonts;
