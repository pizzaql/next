import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import Header from './header';
import ExtLink from './extlink';
import getAge from '../utils/get-age';

import placeholder from '../public/images/me-placeholder.svg';
import me from '../public/images/me.jpg';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	width: 100%;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 1.25em;
	width: 100%;
	max-width: 36rem;
`;

const Image = styled(SimpleImg)`
	user-select: none;
`;

const Divider = styled.hr`
	border: none;
	padding: var(--gap-double);

	&::after {
		content: "• • •";
		color: var(--light-gray);
		font-size: 24px;
		letter-spacing: 12px;
	}
`;

const About = (): JSX.Element => (
	<>
		<Container>
			<Box>
				<h1>Hi, my name is Antoni 👋</h1>
				<p>
					Thanks for visiting my site! Below you can find more information about me and projects.
					If you need anything else please just drop me a <ExtLink href="https://twitter.com/dokwadratu"><b>Tweet</b></ExtLink> or <ExtLink href="mailto:a@kepinski.me"><b>email</b></ExtLink> &lt;3
				</p>
			</Box>
			<Image
				src={me}
				placeholder={placeholder}
				// @ts-expect-error
				draggable={false}
				alt="Me"
				height="13.5em"
				imgStyle={{borderRadius: 'var(--inline-radius)'}}
			/>
		</Container>
		<Divider/>
		<Header>About</Header>
		<p>
			I&apos;m a {getAge()} years old developer, currently based near Poznań, Poland.
			Since late 2019 I&apos;m helping maintain <ExtLink href="https://github.com/node-fetch/node-fetch">node-fetch</ExtLink>, a lightweight library, which brings Fetch API to Node.js.
			I also maintain a collection of my own open source projects.
		</p>
		<p>When it comes to offline activities, I hugely enjoy travelling, riding a bike and listening to music.</p>
	</>
);

export default About;
