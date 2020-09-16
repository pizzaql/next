import React, {useState, useEffect} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import {RecoilRoot} from 'recoil';
import debounce from 'lodash.debounce';
import nprogress from 'nprogress';

import Container from '../components/container';
import {_theme} from '../lib/recoil-atoms';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
	start.cancel();
	nprogress.done();
	window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', () => {
	start.cancel();
	nprogress.done();
});

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const [theme, setTheme] = useState<'dark' | 'light' | undefined>(undefined);

	useEffect(() => {
		const previous = localStorage.getItem('theme');

		if (previous && /dark|light/.exec(previous)) {
			setTheme(previous as 'dark' | 'light');
		} else {
			localStorage.setItem('theme', 'dark');
			setTheme('dark');
		}
	}, []);

	return (
		<>
			<Head>
				<title>Antoni Kepinski</title>
			</Head>
			{theme && (
				<RecoilRoot
					initializeState={({set}) => {
						if (theme) {
							set(_theme, theme);
						}
					}}
				>
					<Container>
						<Component {...pageProps}/>
					</Container>
				</RecoilRoot>
			)}
		</>
	);
};

export default App;
