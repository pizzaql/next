import React from 'react';
import {NextPage} from 'next';

import Main from '../components/main';
import Box from '../components/box';
import Mail from '../components/mail';
import ExtLink from '../components/extlink';

const Index: NextPage<unknown> = () => {
	return (
		<Main>
			<Box>
				<p>I value my time, so make it worth it, and keep it succinct.</p>
				<Mail/>
				<p>You can also contact me on <ExtLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/dokwadratu">Twitter</ExtLink>.</p>
			</Box>
		</Main>
	);
};

export default Index;
