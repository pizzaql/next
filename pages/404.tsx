import React from 'react';
import {NextPage} from 'next';
import styled from 'styled-components';

import Main from '../components/main';

const Quote = styled.blockquote`
	font-style: italic;
    margin: 0;
    padding-left: 1rem;
    border-left: 3px solid var(--light-gray);
    transition: border-color var(--transition);
`;

const Index: NextPage<unknown> = () => (
	<Main>
		<h1>This page cannot be found.</h1>
		<Quote cite="https://www.opensourceshakespeare.org/views/plays/play_view.php?WorkID=henry6p3&Act=3&Scene=3&Scope=scene">
			<p>Having nothing, nothing can he lose.</p>
			<footer>
				— William Shakespeare
			</footer>
		</Quote>
	</Main>
);

export default Index;
