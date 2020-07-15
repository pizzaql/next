import React from 'react';
import {NextPage, GetStaticProps} from 'next';
import useSWR from 'swr';

import Main from '../components/main';
import Projects from '../components/projects';
import {fetcher, Response} from '../utils/fetcher';

interface Props {
	data: Response;
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetcher();
	return {
		props: {data},
		unstable_revalidate: 1
	};
};

const Index: NextPage<Props> = (props: Readonly<Props>) => {
	const initialData = props.data;

	const {data} = useSWR('stars', fetcher, {initialData});

	return (
		<Main>
			<h1>Projects</h1>
			<p>I am passionate about open source software and giving back to others. Here you can find some of my featured projects.</p>
			<Projects stars={data}/>
		</Main>
	);
};

export default Index;
