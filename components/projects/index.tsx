import React from 'react';
import styled from 'styled-components';

import ExtLink from '../extlink';
import {Response} from '../../utils/fetcher';
import data from './data.json';

interface Props {
	stars: Response | undefined;
}

interface ElementProps {
	deg?: number;
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
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 1rem;
	width: 100%;
	padding-top: var(--gap);
	align-items: center;

	@media (min-width: 150px) and (max-width: 480px) {
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
	}
`;

const Element = styled.a<ElementProps>`
	box-shadow: var(--gray) 1em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
	background: linear-gradient(${props => props.deg}deg, #666, #424242);
    padding: var(--gap-double) 1.75rem;
    border-radius: var(--radius);
    transition: all var(--transition-slow);
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

const ExternalLink = styled(ExtLink)`
	text-align: center;
	background: none;
	padding-top: var(--gap);
	grid-column: 1 / -1;
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
					deg={getRandomArbitrary(180, 360)}
					aria-label={element.name}
				>
					<header>
						<Top>
							<Header>{element.name}</Header>
						</Top>
						{stars ? <Count>★ {starCount}</Count> : ''}
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
		<ExternalLink href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer">
			View All Projects on GitHub →
		</ExternalLink>
	</Wrapper>
);

export default Projects;
