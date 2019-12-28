import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Nav from '../components/nav';
import NavLink from '../components/navlink';
import Main from '../components/main';
import Projects from '../components/projects';

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
				<Projects/>
			</Main>
		</Container>
	);
};

export default Index;
