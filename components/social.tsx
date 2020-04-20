import React from 'react';
import {styled} from 'linaria/react';
import {SimpleImg} from 'react-simple-img';

import mail from '../public/images/mail.svg';
import logoTwitter from '../public/images/logo-twitter.svg';
import logoGithub from '../public/images/logo-github.svg';

const Wrapper = styled.ul`
	display: flex;
	justify-content: space-around;
	width: 12em;
	margin-left: -3.5em;
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
		<a href="mailto:a@kepinski.me" target="_blank" rel="noopener noreferrer">
			<Image src={mail} width="2em" height="2em" placeholder="#131415"/>
		</a>
		<a href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer">
			<Image src={logoTwitter} width="2em" height="2em" placeholder="#131415"/>
		</a>
		<a href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer">
			<Image src={logoGithub} width="2em" height="2em" placeholder="#131415"/>
		</a>
	</Wrapper>
);

export default Social;
