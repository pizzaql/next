import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Nav from '../components/nav';
import NavLink from '../components/navlink';
import Main from '../components/main';
import Box from '../components/box';
import Mail from '../components/mail';
import ExtLink from '../components/extlink';

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
					<p>I value my time, so make it worth it, and keep it succinct.</p>
					<Mail/>
					<p>You can also contact me on <ExtLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/dokwadratu">Twitter</ExtLink>.</p>
				</Box>
			</Main>
		</Container>
	);
};

export default Index;
