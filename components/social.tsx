import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import mail from '../public/images/mail.svg';
import logoTwitter from '../public/images/logo-twitter.svg';
import logoGithub from '../public/images/logo-github.svg';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 12em;
	margin-left: -1em;
`;

const Image = styled(SimpleImg)`
	width: 2em;
	cursor: pointer;
	transition: background-color var(--transition);
	display: inline-flex;
	padding: 10px;
	border-radius: var(--inline-radius);

	&:hover {
		background-color: var(--hover);
	}
`;

const Social = (): JSX.Element => (
	<Wrapper>
		<a href="mailto:a@kepinski.me" target="_blank" rel="noopener noreferrer" aria-label="Mail">
			<Image src={mail} width="2em" height="2em" placeholder="#131415" alt="Mail"/>
		</a>
		<a href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
			<Image src={logoTwitter} width="2em" height="2em" placeholder="#131415" alt="Twitter"/>
		</a>
		<a href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer" aria-label="Github">
			<Image src={logoGithub} width="2em" height="2em" placeholder="#131415" alt="Github"/>
		</a>
	</Wrapper>
);

export default Social;
