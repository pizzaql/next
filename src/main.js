'use strict';

import WebFont from 'webfontloader';

const emoji = ['🚀', '🌐', '⚡', '🔥', '🦄'];
const randomEmoji = document.querySelector('.re');
const supportsLocalStorage = 'localStorage' in window;
const darkModeButton = document.querySelector('.dm');

// Some DevTools console messages ✨
const info = () => {
	const welcomeMessage = 'color: black; font-size: 25px; font-weight: bold;';
	const infoMessage = 'color: grey; font-size: 10px; font-weight: bold;';

	console.log('%cWelcome!', welcomeMessage);
	console.log('%cWanna look into source code? Check out https://github.com/xxczaki/kepinski.me', infoMessage);
};

// Choose random emoji
if (randomEmoji) {
	randomEmoji.textContent = emoji[Math.floor(Math.random() * emoji.length)];
}

// Trigger an event, if the button is pressed
if (darkModeButton) {
	darkModeButton.addEventListener('click', switchMode);
}

// Check, if browser supports local storage
if (supportsLocalStorage) {
	const darkModeOn = localStorage.getItem('darkMode');
	if (darkModeOn) {
		switchMode();
	}
}

// Switch mode
function switchMode() {
	const on = document.body.classList.toggle('dark-mode');

	if (darkModeButton) {
		darkModeButton.setAttribute('aria-pressed', on);
	}
	// If the browser supports local storage, save the preferred mode there
	if (supportsLocalStorage) {
		if (on) {
			localStorage.setItem('darkMode', true);
		} else {
			localStorage.removeItem('darkMode');
		}
	}
}

// Load Google Fonts
WebFont.load({
	google: {
		families: ['Roboto Mono:400']
	}
});

info();
