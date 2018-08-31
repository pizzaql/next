'use strict';

import WebFont from 'webfontloader';

const {body} = document;
const btns = document.querySelectorAll('.btns > button');

// Load Google Fonts
WebFont.load({
	google: {
		families: ['Roboto Slab:400,600']
	}
});

// Handle dark/light theme button
btns.forEach(async btn => {
	await btn.addEventListener('click', handleThemeUpdate);
});

// Update CSS class, when the button is pressed
async function handleThemeUpdate(e) {
	if (e.target.dataset.theme === 'light') {
		await body.classList.add('light-theme');
	} else {
		await body.classList.remove('light-theme');
	}
}

// Some DevTools console messages ✨
console.log('%cWelcome!', 'color: black; font-size: 25px; font-weight: bold;');
console.log('%cWanna look into source code? Check out https://github.com/xxczaki/kepinski.me', 'color: grey; font-size: 10px; font-weight: bold;');
