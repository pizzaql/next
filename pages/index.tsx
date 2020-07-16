import React from 'react';
import {NextPage} from 'next';

import Main from '../components/main';
import About from '../components/about';
import TechStack from '../components/tech-stack';
import Contact from '../components/contact';

const Index: NextPage<unknown> = () => {
	console.log(process.env.VERCEL_GITHUB_COMMIT_SHA);
	console.log(process.env.NOW_GITHUB_COMMIT_SHA);
	return (
		<Main>
			<About/>
			<TechStack/>
			<Contact/>
		</Main>
	);
};

export default Index;
