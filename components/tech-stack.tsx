import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import Header from './header';

interface Props {
	background: string;
	color?: string;
}

const Section = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	width: 100%;
	height: 10em;

	::-webkit-scrollbar {
		width: 0px;
		background-color: rgba(255, 255, 255, 0.1);
		height: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #fff;
		height: 2px;
	}

	::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.05);
		height: 4px;
	}
`;

const Wrapper = styled.div`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-auto-flow: column;
`;

const Block = styled.a<Props>`
	background: ${props => props.background};
	color: ${props => props.color ?? '#121212'};
    display: inline-block;
    width: 175px;
    height: 100px;
    padding: 20px;
    flex: 0 0 auto;
    border-bottom-style: none;
    border-radius: var(--radius);
    transition: all 200ms ease-in-out;
	text-decoration: none;
	user-select: none;

	&:hover {
		opacity: 0.8;
    	box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.05);
	}
`;

const Image = styled(SimpleImg)`
	margin-bottom: -0.7em;
`;

// Here the paragraph imitates the `h4` HTML tag, so that the heading elements are in a sequentially-descending order.
const Heading = styled.p`
	display: block;
	font-weight: bold;
	font-size: 1em;
	text-align: center;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const TechStack = (): JSX.Element => (
	<>
		<Header>Things I use</Header>
		<Section>
			<Wrapper>
				<Block background="#f0db4f" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/" target="_blank" rel="noopener noreferrer" aria-label="JavaScript">
					<Image
						src={require('../public/images/logo-javascript.svg')}
						placeholder="#f0db4f"
						// @ts-expect-error
						draggable={false}
						alt="JavaScript"
						height="3.5em"
					/>
					<Heading>JavaScript (ES6+)</Heading>
				</Block>
				<Block background="#007acc" color="#fff" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" aria-label="TypeScript">
					<Image
						src={require('../public/images/logo-typescript.svg')}
						placeholder="#007acc"
						// @ts-expect-error
						draggable={false}
						alt="TypeScript"
						height="3.5em"
					/>
					<Heading>TypeScript</Heading>
				</Block>
				<Block background="#61dafb" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React">
					<Image
						src={require('../public/images/logo-react.svg')}
						placeholder="#61dafb"
						// @ts-expect-error
						draggable={false}
						alt="React"
						height="3.5em"
					/>
					<Heading>React</Heading>
				</Block>
				<Block background="#000" color="#fff" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Next.js">
					<Image
						src={require('../public/images/logo-nextjs.svg')}
						placeholder="#000"
						// @ts-expect-error
						draggable={false}
						alt="Next.js"
						height="3.5em"
					/>
					<Heading>Next.js</Heading>
				</Block>
				<Block background="#663399" color="#fff" href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Gatsby">
					<Image
						src={require('../public/images/logo-gatsby.svg')}
						placeholder="#663399"
						// @ts-expect-error
						draggable={false}
						alt="Gatsby"
						height="3.5em"
					/>
					<Heading>Gatsby</Heading>
				</Block>
				<Block background="#61dafb" href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" aria-label="React Native">
					<Image
						src={require('../public/images/logo-react.svg')}
						placeholder="#61dafb"
						// @ts-expect-error
						draggable={false}
						alt="React Native"
						height="3.5em"
					/>
					<Heading>React Native</Heading>
				</Block>
				<Block background="#68A063" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" aria-label="Node.js">
					<Image
						src={require('../public/images/logo-nodejs.svg')}
						placeholder="#68A063"
						// @ts-expect-error
						draggable={false}
						alt="Node.js"
						height="3.5em"
					/>
					<Heading>Node.js</Heading>
				</Block>
				<Block background="#dea584" href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer" aria-label="Rust">
					<Image
						src={require('../public/images/logo-rust.svg')}
						placeholder="#dea584"
						// @ts-expect-error
						draggable={false}
						alt="Rust"
						height="3.5em"
					/>
					<Heading>Rust</Heading>
				</Block>
				<Block background="#654ff0" color="#fff" href="https://webassembly.org/" target="_blank" rel="noopener noreferrer" aria-label="WebAssembly">
					<Image
						src={require('../public/images/logo-wasm.svg')}
						placeholder="#654ff0"
						// @ts-expect-error
						draggable={false}
						alt="WebAssembly"
						height="3.5em"
					/>
					<Heading>WebAssembly</Heading>
				</Block>
			</Wrapper>
		</Section>
	</>
);

export default TechStack;
