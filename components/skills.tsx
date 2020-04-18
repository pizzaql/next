import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
	display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
`;

const Element = styled.li`
	position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
	font-size: 13px;
	line-height: 1.3;

	&:before {
		content: "▹";
    	position: absolute;
    	left: 0px;
    	color: var(--text);
    	font-size: 14px;
    	line-height: 12px;
	}
`;

const Skills = (): JSX.Element => (
	<List>
		<Element>JavaScript (ES6+)</Element>
		<Element>React</Element>
		<Element>Next.js</Element>
		<Element>Gatsby</Element>
		<Element>Node.js</Element>
		<Element>HTML & CSS</Element>
	</List>
);

export default Skills;
