import React from 'react';
import {NextPage, GetStaticProps} from 'next';
import useSWR from 'swr';

import Heading from '../components/heading';
import Main from '../components/main';
import Projects from '../components/projects';

import {fetcher, Response} from '../utils/fetcher';

interface Props {
	data: Response;
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await fetcher();
	return {props: {data}};
};

const Index: NextPage<Props> = (props: Readonly<Props>) => {
	const initialData = props.data;

	const {data} = useSWR('stars', fetcher, {initialData});

	return (
		<Main>
			<Heading>Antoni Kepinski</Heading>
			<p>{new Date().getFullYear() - 2003} years old frontend developer, open source enthusiast and classical music lover.</p>
			<Projects stars={data}/>
		</Main>
	);
};

export default Index;
