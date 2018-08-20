if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

console.log('%cWelcome!', 'color: black; font-size: 25px; font-weight: bold;');
console.log('%cWanna look into source code? Check out https://github.com/xxczaki/kepinski.me', 'color: grey; font-size: 10px; font-weight: bold;');