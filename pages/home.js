import React from 'react';
import {createGlobalStyle} from 'styled-components';

// Import Components
import Container from './components/container';
import Avatar from './components/avatar';
import Header from './components/header';
import Details from './components/details';
import List from './components/list';
import Description from './components/description';
import Link from './components/link';

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    background: #212121;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    font-family: Roboto Mono, monospace;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
  :focus {
    outline: none
  }
  
  ::selection {
    background-color: #9E9E9E
  }
  summary::-webkit-details-marker {
    font-size: 0.8em;
    margin-right: 0.8em
  }
`;

// Template
export default Home => (
	<Container>
	<picture>
  	<source type="image/webp" srcSet="https://cdn.jsdelivr.net/gh/xxczaki/kepinski.me/static/avatar.webp" draggable="false" alt="Antoni Kepinski"/>
  	<source type="image/jpeg" srcSet="https://cdn.jsdelivr.net/gh/xxczaki/kepinski.me/static/avatar.jpg" draggable="false" alt="Antoni Kepinski"/>
  	<Avatar src="https://cdn.jsdelivr.net/gh/xxczaki/kepinski.me/static/avatar.jpg" draggable="false" alt="Antoni Kepinski"/>
	</picture>
		<Header>Antoni Kepinski ⚡</Header>
		<Details>
			<summary>
				<Description>About me</Description>
			</summary>
			<p>I'm 15 years old Node.js Developer, currently living in Poland.</p>
			<p>I love making cool CLI apps & modules.</p>
		</Details>
		<Details>
			<summary>
				<Description>Projects</Description>
			</summary>
			<p>Here is a list of my featured projects:</p>
			<List>
				<li><Link href="https://github.com/xxczaki/cash-cli/">Cash CLI</Link></li>
				<li><Link href="https://github.com/elcalc/elcalc/">Elcalc</Link></li>
				<li><Link href="https://github.com/xxczaki/oji/">Oji</Link></li>
				<li><Link href="https://github.com/xxczaki/fastic/">Fastic</Link></li>
				<li><Link href="https://github.com/xxczaki/speedo-cli/">Speedo CLI</Link></li>
				<li><Link href="https://github.com/xxczaki/xa/">XA</Link></li>
				<li><Link href="https://github.com/xxczaki/airly-cli">Airly CLI</Link></li>
			</List>
		</Details>
		<Details>
			<summary>
				<Description>Social Media & Contact</Description>
			</summary>
			<p>I write code on <Link href="https://github.com/xxczaki" rel="me">GitHub</Link>, post short thoughts on <Link href="https://twitter.com/dokwadratu" rel="me">Twitter</Link> & the longer ones on my <Link href="https://medium.com/kepinski-dev-blog" rel="me">Blog</Link>.</p>
			<Link href="mailto:a@kepinski.me?Subject=Hello" rel="me">Get in touch 👋</Link>
		</Details>
		<GlobalStyle/>
	</Container>
);