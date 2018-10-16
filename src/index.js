import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'

import Container from './components/container.js';
import Avatar from './components/avatar.js';
import Header from './components/header.js';
import Details from './components/details.js';
import Description from './components/description.js';
import Link from './components/link.js';

import image from '../public/images/avatar.jpg';

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
`

ReactDOM.render(
    <Container>
      <Avatar src={image}/>
      <Header>Antoni Kepinski</Header>
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
      <ul class="list list-items">
        <li><Link href="https://github.com/xxczaki/cash-cli/">Cash CLI</Link></li>
        <li><Link href="https://github.com/elcalc/elcalc/">Elcalc</Link></li>
        <li><Link href="https://github.com/xxczaki/oji/">Oji</Link></li>
        <li><Link href="https://github.com/xxczaki/fastic/">Fastic</Link></li>
        <li><Link href="https://github.com/xxczaki/speedo-cli/">Speedo CLI</Link></li>
        <li><Link href="https://github.com/xxczaki/xa/">XA</Link></li>
      </ul>
    </Details>
    <Details>
      <summary>
        <Description class="as-text">Social Media & Contact</Description>
      </summary>
      <ul class="list list-items">
        <li><Link href="https://github.com/xxczaki" rel="me">GitHub</Link></li>
        <li><Link href="https://twitter.com/dokwadratu" rel="me">Twitter</Link></li>
        <li><Link href="mailto:a@kepinski.me?Subject=Hello" rel="me">Mail</Link></li>
      </ul>
    </Details>
    <GlobalStyle/>
    </Container>,
    document.getElementById('root')
    );