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

const Header = styled.header`
	z-index: 10;
    margin: 2rem auto 3rem auto;
    position: sticky;
    padding: 1rem 0;
    top: 0;
    background-color: #131415cc;
    backdrop-filter: saturate(180%) blur(20px);
	transition: 0.1s ease-in-out;
`;

const Wrapper = styled.div`
	height: 32px;
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 45rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Container = ({children}: Props): JSX.Element => (
	<>
		<Header>
			<Wrapper>
				<Link href="/">
					<Logo src={flashOutline} draggable={false} alt="Flash"/>
				</Link>
				<Nav>
					<NavLink title="Work" href="/"/>
					<NavLink title="About" href="/about"/>
				</Nav>
			</Wrapper>
		</Header>
		{children}
		<Footer>
			<p>Copyright &copy; 2020 Antoni Kepinski</p>
		</Footer>
	</>
);

export default Container;
