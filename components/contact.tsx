import React, {useEffect} from 'react';
import styled from 'styled-components';

import Header from './header';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	justify-content: space-between;
	width: 100%;
	grid-gap: 5em;

	@media (min-width: 320px) and (max-width: 617px) {
		grid-gap: 2em;
	}
`;

const Wrapper = styled.div`
	display: grid;
`;

const Label = styled.label`
	display: flex;
	height: 2.25rem;
	width: calc(100% + 20px);
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 16.5rem;
	width: 100%;
`;

const Input = styled.input`
	outline: none;
	transition: var(--transition);
	transition-property: color,box-shadow,background,border-color;
	box-shadow: 0 0 0 0 rgba(0,93,255,0);
	background-color: var(--gray);
	font-family: inherit;
    font-weight: 500;
    word-break: break-word;
    font-size: 1rem;
    color: var(--text);
    resize: none;
    appearance: none;
    border-style: solid;
    border-image: initial;
    border-width: 2px;
    border-color: var(--light-gray);
    border-radius: var(--inline-radius);
    padding: var(--gap-half);
	cursor: text;

	&:focus {
		border-color: rgb(0, 93, 255);
		box-shadow: 0 0 0 3px rgba(0,93,255,0.6);
	}
`;

const TextArea = styled.textarea`
	outline: none;
	transition: var(--transition);
	transition-property: color,box-shadow,background,border-color;
	box-shadow: 0 0 0 0 rgba(0,93,255,0);
	background-color: var(--gray);
	font-family: inherit;
    font-weight: 500;
    word-break: break-word;
    font-size: 1rem;
	height: 4rem;
    color: var(--text);
    resize: none;
    appearance: none;
    border-style: solid;
    border-image: initial;
    border-width: 2px;
    border-color: var(--light-gray);
    border-radius: var(--inline-radius);
    padding: var(--gap-half);
	cursor: text;

	&:focus {
		border-color: rgb(0, 93, 255);
		box-shadow: 0 0 0 3px rgba(0,93,255,0.6);
	}
`;

const Button = styled.button`
	outline: none;
	transition: 100ms ease-in-out;
	transition-property: color,box-shadow,background,border-color,opacity;
	box-shadow: 0 0 0 0 rgba(0,93,255,0);
	margin-top: 0.5rem;
	background-color: var(--gray);
	color: var(--text);
	font-size: 1rem;
	font-family: inherit;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	padding-left: 10px;
	padding-right: 10px;
	font-weight: 500;
	cursor: pointer;
	border-width: initial;
	border-style: none;
	border-color: initial;
	border-image: initial;
	border-radius: 7px;
	overflow: hidden;
	appearance: button;

	&:hover {
		opacity: 0.8;
	}

	&:focus {
    	box-shadow: 0 0 0 3px rgba(0,93,255,0.6);
	}
`;

const Contact = (): JSX.Element => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = '/embed.js';
		script.async = true;
		script.defer = true;

		document.body.append(script);
	}, []);

	return (
		<Container>
			<Wrapper>
				<Header>Get in touch</Header>
				<Form action="https://formspree.io/xbjzppvn" method="POST">
					<Label>Email</Label>
					<Input required type="email" name="email" aria-label="Your email address" aria-required="true" placeholder="jane@acme.com"/>
					<Label>Message</Label>
					<TextArea required name="message" aria-label="Your message" aria-required="true" placeholder="I would like to talk about..."/>
					<Button type="submit">Send</Button>
				</Form>
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
