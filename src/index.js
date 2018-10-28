import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import WebFont from 'webfontloader';

// Import images
import me from '../public/images/avatar.jpg';

// Import Components
import Container from './components/container';
import Avatar from './components/avatar';
import Header from './components/header';
import Details from './components/details';
import Description from './components/description';
import Link from './components/link';

// Load Google Fonts
WebFont.load({
	google: {
		families: ['Roboto Mono:400']
	}
});

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

  a:hover {
    text-decoration: none;
    background: #fdfdfd;
    color: #1b1b1b
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

// Render page
ReactDOM.render(
	<Container>
		<Avatar src={me} draggable="false" alt="Antoni Kepinski"/>
		<Header>Antoni Kepinski ⚡</Header>
		<Details>
			<summary>
				<Description class="as-text">About me</Description>
			</summary>
			<p>I'm 15 years old Node.js Developer, currently living in Poland.</p>
			<p>I love making cool CLI apps & modules.</p>
		</Details>
		<Details>
			<summary>
				<Description class="as-text">Projects</Description>
			</summary>
			<ul className="list list-items">
				<li><Link href="https://github.com/xxczaki/cash-cli/">Cash CLI</Link></li>
				<li><Link href="https://github.com/elcalc/elcalc/">Elcalc</Link></li>
				<li><Link href="https://github.com/xxczaki/oji/">Oji</Link></li>
				<li><Link href="https://github.com/xxczaki/fastic/">Fastic</Link></li>
				<li><Link href="https://github.com/xxczaki/speedo-cli/">Speedo CLI</Link></li>
				<li><Link href="https://github.com/xxczaki/xa/">XA</Link></li>
				<li><Link href="https://github.com/xxczaki/status-git">Status Git</Link></li>
			</ul>
		</Details>
		<Details>
			<summary>
				<Description class="as-text">Social Media & Contact</Description>
			</summary>
				<p>I write code on <Link href="https://github.com/xxczaki" rel="me">GitHub</Link>, post short thoughts on <Link href="https://twitter.com/dokwadratu" rel="me">Twitter</Link> & the longer ones on my <Link href="https://medium.com/kepinski-dev-blog" rel="me">Blog</Link></p>
				<Link href="mailto:a@kepinski.me?Subject=Hello" rel="me">Get in touch 👋</Link>
		</Details>
		<GlobalStyle/>
	</Container>,
	document.getElementById('root')
);
