import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import {createGlobalStyle} from 'styled-components';
import NProgress from 'nprogress';

import Container from '../components/container';
import Transition from '../components/transition';

// Fonts
import PlayfairDisplayWoff from '../public/fonts/playfair-display-v18-latin-regular.woff';
import PlayfairDisplayWoff2 from '../public/fonts/playfair-display-v18-latin-regular.woff2';
import SpaceMonoWoff from '../public/fonts/space-mono-v5-latin-regular.woff';
import SpaceMonoWoff2 from '../public/fonts/space-mono-v5-latin-regular.woff2';
import '../public/styles/nprogress.css';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Playfair Display';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Playfair Display'), local('PlayfairDisplay-Regular'),
			url(${PlayfairDisplayWoff2}) format('woff2'),
			url(${PlayfairDisplayWoff}) format('woff');
  	}

	@font-face {
		font-family: 'Space Mono';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Space Mono'), local('SpaceMono-Regular'),
			url(${SpaceMonoWoff2}) format('woff2'),
			url(${SpaceMonoWoff}) format('woff');
  	}

	body {
		font-family: 'Space Mono', monospace;
		background-color: #131415;
		color: #fff;
		font-size: 16px;
		padding: 1em;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
		overflow-x: hidden;
	}
`;

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const myApp = ({Component, pageProps, router}: Readonly<AppProps>): JSX.Element => (
	<>
		<GlobalStyle/>
		<Head>
			<title>Antoni Kepinski</title>
		</Head>
		<Container>
			<Transition id={router.pathname}>
				<Component {...pageProps} key={router.route}/>
			</Transition>
		</Container>
	</>
);

export default myApp;
