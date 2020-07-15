import React, {useEffect} from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import Header from './header';

import email from '../public/images/email.svg';
import logoTwitter from '../public/images/logo-twitter.svg';
import logoGitHub from '../public/images/logo-github.svg';
import logoInstagram from '../public/images/logo-instagram.svg';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	justify-content: space-between;
	width: 100%;
`;

const Wrapper = styled.div`
	display: grid;
	grid-gap: 1em;
`;

const Box = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 9em;
	height: 2em;
	cursor: pointer;
	background-color: var(--gray);
	transition: background-color var(--transition);
	padding: 10px;
	border-radius: var(--inline-radius);
	text-decoration: none;
	color: var(--text);
	user-select: none;

	&:hover {
		background-color: var(--hover);
	}
`;

const Image = styled(SimpleImg)`
	width: 1.6em;
`;

const Contact = (): JSX.Element => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = require('../embed.js');
		script.async = true;
		script.defer = true;
		document.body.append(script);
	}, []);

	return (
		<Container>
			<Wrapper>
				<Header>Don&apos;t be a stranger</Header>
				<Box href="mailto:a@kepinski.me" target="_blank" rel="noopener noreferrer" aria-label="Email">
					<Image src={email} width="1.6em" height="1.6em" placeholder="var(--gray)" alt="Email"/>
					<h4>Email</h4>
				</Box>
				<Box href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<Image src={logoTwitter} width="1.6em" height="1.6em" placeholder="var(--gray)" alt="Twitter"/>
					<h4>Twitter</h4>
				</Box>
				<Box href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<Image src={logoGitHub} width="1.6em" height="1.6em" placeholder="var(--gray)" alt="GitHub"/>
					<h4>GitHub</h4>
				</Box>
				<Box href="https://instagram.com/akepinski" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<Image src={logoInstagram} width="1.6em" height="1.6em" placeholder="var(--gray)" alt="Instagram"/>
					<h4>Instagram</h4>
				</Box>
			</Wrapper>
			<Wrapper>
				<Header>Listen to a podcast!</Header>
				<audio
					controls
					data-theme="night"
					data-src="https://changelog.com/jsparty/85/embed"
					src="https://cdn.changelog.com/uploads/jsparty/85/js-party-85.mp3"
					preload="none"
					className="changelog-episode"
				/>
			</Wrapper>
		</Container>
	);
};

export default Contact;
