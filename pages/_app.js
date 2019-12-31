import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {AnimatePresence, motion} from 'framer-motion';

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
		overflow-x: hidden;
	}
`;

class MyApp extends App {
	render() {
		const {Component, pageProps, router} = this.props;

		const spring = {
			type: 'spring',
			damping: 20,
			stiffness: 100,
			when: 'beforeChildren'
		};

		return (
			<>
				<GlobalStyle/>
				<Head>
					<title>Antoni Kepinski</title>
				</Head>
				<Container>
					<AnimatePresence exitBeforeEnter>
						<div className="page-transition-wrapper">
							<motion.div
								key={router.pathname}
								transition={spring}
								initial={{x: 300, opacity: 0}}
								animate={{x: 0, opacity: 1}}
								exit={{x: -300, opacity: 0}}
								id="page-transition-container"
							>
								<Component {...pageProps} key={router.route}/>
							</motion.div>
						</div>
					</AnimatePresence>
				</Container>
			</>
		);
	}
}

export default MyApp;
