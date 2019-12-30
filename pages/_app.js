import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

import Container from '../components/container';

// Assets
import SpaceMonoWoff from '../public/fonts/space-mono-v5-latin-regular.woff';
import SpaceMonoWoff2 from '../public/fonts/space-mono-v5-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
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
		font-family: Space Mono, monospace;
		background-color: #121212;
		color: #fff;
		margin: auto;
		width: 100%;
		font-size: 16px;
		padding-top: 20px;
		padding-bottom: 100px;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}
`;

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<>
				<GlobalStyle/>
				<Container>
					<Head>
						<title>Antoni Kepinski</title>
					</Head>
					<Component {...pageProps}/>
				</Container>
			</>
		);
	}
}

export default MyApp;
