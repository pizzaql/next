import React from 'react';
import styled from 'styled-components';

import {Response} from '../../utils/fetcher';

import data from './data.json';

interface Props {
	stars: Response | undefined;
}

interface ElementProps {
	deg: number;
}

interface Project {
	id: string;
	name: string;
	description: string;
	url: string;
	tags: string[];
}

const getRandomArbitrary = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1;
	gap: 2em;
	padding-top: 2em;
	max-width: 70em;

	@media (min-width: 320px) and (max-width: 480px) {
		max-width: 100%;
	}
`;

const Element = styled.a`
	box-shadow: #222 1em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
	background: rgb(43,45,48);
	background: linear-gradient(${(props: ElementProps) => props.deg}deg, #2b2d30 0%, #3b3e42 85%);
    padding: 2rem 1.75rem;
    border-radius: 20px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
	cursor: pointer;
	color: inherit;
	text-decoration: inherit;

	&:hover {
		transform: scale(1.02);
	}

	a {
		text-decoration: none;
		color: #fff;
	}
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Header = styled.h5`
	font-size: 22px;
	margin: 0px 0px 10px;
`;

const Count = styled.p`
	font-size: 12px;
	margin-top: -1em;
`;

const Description = styled.p`
	margin: 0px 0px 15px;
`;

const Tags = styled.ul`
	display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0px;
    margin: 20px 0px 0px;
    list-style: none;
`;

const Tag = styled.li`
	font-size: 13px;
    color: #8892B0;
    line-height: 1.75;
    margin-right: 15px;
`;

const Projects = ({stars}: Props): JSX.Element => (
	<Wrapper>
		{data.map((element: Project) => {
			const starCount = stars?.repositoryOwner.repositories.nodes.filter(data => element.id === data.name).map(element => element.stargazers.totalCount);

			return (
				<Element 
					key={element.id} 
					href={element.url} 
					target="_blank" 
					rel="noopener noreferrer" 
					deg={getRandomArbitrary(0, 360)}
					aria-label={element.name}
				>
					<header>
						<Top>
							<Header>{element.name}</Header>
						</Top>
						{stars ? <Count>⭐ {starCount}</Count> : ''}
						<Description>
							{element.description}
						</Description>
					</header>
					<footer>
						<Tags>
							{element.tags.map(name => (
								<Tag key={name}>{name}</Tag>
							))}
						</Tags>
					</footer>
				</Element>
			);
		})}
	</Wrapper>
);

export default Projects;
