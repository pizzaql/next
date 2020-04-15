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
	return {props: {data}};
};

const Index: NextPage<Props> = (props: Readonly<Props>) => {
	const initialData = props.data;

	const {data, error} = useSWR('stars', fetcher, {initialData});

	return (
		<Main>
			{error ? <p>Could not fetch stars from Github</p> : ''}
			<Projects stars={data}/>
		</Main>
	);
};

export default Index;
