import React from 'react';
import {createGlobalStyle} from 'styled-components';
import fonts from './fonts';

// Import Components
import Container from './components/container';
import Avatar from './components/avatar';
import Header from './components/header';
import Details from './components/details';
import List from './components/list';
import Description from './components/description';
import Link from './components/link';
import Github from './components/github';
import Vector from './components/vector';

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
`;

class Index extends React.Component {
	async componentDidMount() {
		await fonts();
	}

	render() {
		return (
			<Container>
				<picture>
					<source type="image/webp" srcSet="static/avatar.webp" importance="high" draggable="false" alt="Antoni Kepinski"/>
					<source type="image/jpeg" srcSet="static/avatar.jpg" importance="high" draggable="false" alt="Antoni Kepinski"/>
					<Avatar src="static/avatar.jpg" importance="high" draggable="false" alt="Antoni Kepinski"/>
				</picture>
				<Header>Antoni Kepinski ⚡</Header>
				<Details>
					<summary>
						<Description>About me</Description>
					</summary>
					<p>I&apos;m 16 years old Node.js Developer, currently living in Poland.</p>
					<p>I love making websites, CLI tools & modules.</p>
				</Details>
				<Details>
					<summary>
						<Description>Projects</Description>
					</summary>
					<List>
						<li><Link href="https://github.com/xxczaki/cash-cli/" target="_blank" rel="noopener">Cash CLI</Link></li>
						<li><Link href="https://github.com/elcalc/elcalc/" target="_blank" rel="noopener">Elcalc</Link></li>
						<li><Link href="https://github.com/xxczaki/oji/" target="_blank" rel="noopener">Oji</Link></li>
						<li><Link href="https://github.com/xxczaki/fastic/" target="_blank" rel="noopener">Fastic</Link></li>
						<li><Link href="https://github.com/xxczaki/speedo-cli/" target="_blank" rel="noopener">Speedo CLI</Link></li>
						<li><Link href="https://github.com/xxczaki/xa/" target="_blank" rel="noopener">XA</Link></li>
						<li><Link href="https://github.com/xxczaki/airly-cli" target="_blank" rel="noopener">Airly CLI</Link></li>
						<li><Link href="https://github.com/xxczaki/pizzaql" target="_blank" rel="noopener">PizzaQL</Link></li>
					</List>
					<Github href="https://github.com/xxczaki?tab=repositories" target="_blank" rel="noopener"><Vector src="static/github.svg" alt="Github"/>See more on GitHub</Github>
				</Details>
				<Details>
					<summary>
						<Description>Social Media & Contact</Description>
					</summary>
					<p>I write code on <Link href="https://github.com/xxczaki" target="_blank" rel="noopener">GitHub</Link>, post short thoughts on <Link href="https://twitter.com/dokwadratu" target="_blank" rel="noopener">Twitter</Link> & the longer ones on my <Link href="https://medium.com/kepinski-dev-blog" target="_blank" rel="noopener">Blog</Link>.</p>
					<Link href="mailto:a@kepinski.me?Subject=Hello" target="_blank" rel="noopener">Get in touch 👋</Link>
				</Details>
				<GlobalStyle/>
			</Container>
		);
	}
}

export default Index;
