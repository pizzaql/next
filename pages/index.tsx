import React from 'react';
import {NextPage} from 'next';

import Main from '../components/main';
import About from '../components/about';
import TechStack from '../components/tech-stack';
import Contact from '../components/contact';

const Index: NextPage<unknown> = () => (
	<Main>
		<About/>
		<TechStack/>
		<Contact/>
	</Main>
);

export default Index;
