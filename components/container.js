import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './header';
import Nav from './nav';
import NavLink from './navlink';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto 30px;
	padding-left: 3em;
	padding-right: 20px;

	@media (min-width: 320px) and (max-width: 480px) {
		padding-left: 20px;
	}
`;

const Container = props => (
	<Wrapper>
		<Header>
			<h1>Antoni Kepinski</h1>
		</Header>
		<Nav>
			<NavLink title="Home" href="/"/>
			<NavLink title="Projects" href="/projects"/>
			<NavLink title="Contact" href="/contact"/>
		</Nav>
		{props.children}
	</Wrapper>
);

Container.propTypes = {
	children: PropTypes.node.isRequired
};

export default Container;
