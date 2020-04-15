import React from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import {createGlobalStyle} from 'styled-components';
import NProgress from 'nprogress';

import Container from '../components/container';

// Fonts
import InterRegularWoff from '../public/fonts/inter-v1-latin-regular.woff';
import InterRegularWoff2 from '../public/fonts/inter-v1-latin-regular.woff2';
import InterBoldWoff from '../public/fonts/inter-v1-latin-800.woff';
import InterBoldWoff2 from '../public/fonts/inter-v1-latin-800.woff2';
import '../public/styles/nprogress.css';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local(''),
			url(${InterRegularWoff2}) format('woff2'),
			url(${InterRegularWoff}) format('woff');
  	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 800;
		font-display: fallback;
		src: local(''),
			url(${InterBoldWoff2}) format('woff2'),
			url(${InterBoldWoff}) format('woff');
  	}

	body {
		align-items: center;
		justify-content: center;
		font-family: 'Inter', sans-serif;
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

const myApp = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => (
	<>
		<GlobalStyle/>
		<Head>
			<title>Antoni Kepinski</title>
		</Head>
		<Container>
			<Component {...pageProps}/>
		</Container>
	</>
);

export default myApp;
