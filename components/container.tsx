import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from './logo';
import Nav from './nav';
import NavLink from './navlink';
import Footer from './footer';

import flashOutline from '../public/images/flash-outline.svg';

interface Props {
	children: React.ReactNode;
}

const Wrapper = styled.div`
	position: fixed;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: auto;
    z-index: 10;
	display: flex;
	margin: auto;
	padding: 16px;
	justify-content: space-between;
	align-items: center;
	max-width: 40em;
`;

const Container = ({children}: Props): JSX.Element => (
	<>
		<Wrapper>
			<header>
				<Link href="/">
					<Logo src={flashOutline} draggable={false} alt="Flash"/>
				</Link>
			</header>
			<Nav>
				<NavLink title="Work" href="/"/>
				<NavLink title="About" href="/about"/>
			</Nav>
		</Wrapper>
		{children}
		<Footer>
			<p>Copyright &copy; 2020 Antoni Kepinski</p>
		</Footer>
	</>
);

export default Container;
