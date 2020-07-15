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
    margin: var(--gap-double) auto var(--small-gap) auto;
    position: sticky;
    padding: var(--gap) 0;
    top: 0;
    background-color: var(--header);
    backdrop-filter: var(--vibrancy);
	transition: var(--slow);
`;

const Wrapper = styled.div`
	height: 32px;
	margin: 0 auto;
	padding: 0 1rem;
	max-width: var(--main-content);
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
					<NavLink title="Home" href="/"/>
					<NavLink title="Projects" href="/projects"/>
				</Nav>
			</Wrapper>
		</Header>
		{children}
		<Footer>
			<p>Copyright &copy; {new Date().getFullYear()} Antoni Kepinski</p>
		</Footer>
	</>
);

export default Container;
