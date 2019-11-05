import React from 'react';
import {Global, css} from '@emotion/core';

// Import components
import Container from '../components/container';
import Seo from '../components/seo';
import Content from '../components/content';

// Global Style
const globalStyle = css`
	body {
		font-family: Open Sans, arial, sans-serif;
		margin: auto;
		width: 100%;
		font-size: 16px;
		padding-top: 50px;
		padding-bottom: 100px;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}
	
  	:focus {
    	outline: none
  	}
`;

const IndexPage = () => (
	<Container>
		<Seo title="Home" keywords={['Antoni Kepinski', 'developer', 'kepinski.me']}/>
		<Global styles={globalStyle}/>
		<Content/>
	</Container>
);

export default IndexPage;
