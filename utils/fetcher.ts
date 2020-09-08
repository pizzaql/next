'use strict';

import {gql, GraphQLClient} from 'graphql-request';

const endpoint = 'https://api.github.com/graphql';
const query = gql`{
	repositoryOwner(login: "xxczaki") {
		repositories(orderBy: {direction: DESC, field: STARGAZERS}, first: 7) {
			nodes {
				name
				stargazers {
					totalCount
				}
		  	}
		}
	}
}`;

const client = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.GITHUB_TOKEN ?? ''}`
	}
});

export interface Response {
	repositoryOwner: {
		repositories: {
			nodes: [
				{
					name: string;
					stargazers: {
						totalCount: number;
					};
				}
			];
		};
	};
}

export const fetcher = async (): Promise<Response> => {
	const data: Response = await client.request(query);

	return data;
};
