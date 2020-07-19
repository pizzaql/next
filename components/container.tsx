import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import Logo from './logo';
import Nav from './nav';
import NavLink from './navlink';
import Footer from './footer';

import flashOutline from '../public/images/flash-outline.svg';
import email from '../public/images/email.svg';
import logoTwitter from '../public/images/logo-twitter.svg';
import logoGitHub from '../public/images/logo-github.svg';
import logoInstagram from '../public/images/logo-instagram.svg';

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

	@media (min-width: 150px) and (max-width: 891px) {
		margin: var(--gap-double) auto var(--gap) auto;
	}
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

const Social = styled.div`
	display: flex;
	justify-content: space-between;
	width: 12rem;
`;

const Box = styled.a`
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color var(--transition);
	padding: 5px;
	border-radius: var(--inline-radius);
	user-select: none;

	&:hover {
		background-color: var(--hover);
	}
`;

const Image = styled(SimpleImg)`
	width: 2em;
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
			<p>Antoni Kepinski &copy; {new Date().getFullYear()}</p>
			<Social>
				<Box href="mailto:a@kepinski.me" target="_blank" rel="noopener noreferrer" aria-label="Email">
					<Image src={email} width="2em" height="2em" placeholder="var(--gray)" alt="Email"/>
				</Box>
				<Box href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<Image src={logoTwitter} width="2em" height="2em" placeholder="var(--gray)" alt="Twitter"/>
				</Box>
				<Box href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<Image src={logoGitHub} width="2em" height="2em" placeholder="var(--gray)" alt="GitHub"/>
				</Box>
				<Box href="https://instagram.com/akepinski" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<Image src={logoInstagram} width="2em" height="2em" placeholder="var(--gray)" alt="Instagram"/>
				</Box>
			</Social>
		</Footer>
	</>
);

export default Container;
