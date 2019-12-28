import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Nav from '../components/nav';
import NavLink from '../components/navlink';
import Main from '../components/main';
import Box from '../components/box';
import ExtLink from '../components/extlink';
import Skills from '../components/skills';
import Me from '../components/me';

const Index = () => {
	return (
		<Container>
			<Header>
				<h1>Antoni Kepinski</h1>
			</Header>
			<Nav>
				<NavLink title="Home" href="/"/>
				<NavLink title="Projects" href="/projects"/>
				<NavLink title="Contact" href="/contact"/>
			</Nav>
			<Main>
				<Box>
					<p>Hi, my name is Antoni Kepinski and I&apos;m {new Date().getFullYear() - 2003}. I like programming, especially in JavaScript & Rust. I also contribute to various open source projects.</p>
					<p>When it comes to offline activities, I hugely enjoy travelling and riding a bike 🚴</p>
					<p>I&apos;m currently maintaining <ExtLink target="_blank" rel="noopener noreferrer" href="https://github.com/bitinn/node-fetch">node-fetch</ExtLink>, an open-source library, that brings window.fetch API to Node.js</p>
					<p>Here are a few technologies I&apos;ve been working with recently:</p>
					<Skills/>
				</Box>
				<div>
					<Me/>
				</div>
			</Main>
		</Container>
	);
};

export default Index;
