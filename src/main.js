'use strict';

import WebFont from 'webfontloader';

const {body} = document;
const btns = document.querySelectorAll('.btns > button');

// Some DevTools console messages ✨
const info = () => {
	const welcomeMessage = 'color: black; font-size: 25px; font-weight: bold;';
	const infoMessage = 'color: grey; font-size: 10px; font-weight: bold;';

	console.log('%cWelcome!', welcomeMessage);
	console.log('%cWanna look into source code? Check out https://github.com/xxczaki/kepinski.me', infoMessage);
};

// Update CSS class, when the button is pressed
const handleThemeUpdate = e => {
	if (e.target.dataset.theme === 'light') {
		body.classList.add('light-theme');
	} else {
		body.classList.remove('light-theme');
	}
};

// Handle dark/light theme button
btns.forEach(btn => {
	btn.addEventListener('click', handleThemeUpdate);
});

// Load Google Fonts
WebFont.load({
	google: {
		families: ['Open Sans:400']
	}
});

info();
