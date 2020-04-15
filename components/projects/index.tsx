import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import {Response} from '../../utils/fetcher';

import imageSrc from '../../public/images/open.svg';
import data from './data.json';

interface Props {
	stars: Response | undefined;
}

interface Project {
	id: string;
	name: string;
	description: string;
	url: string;
	tags: string[];
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
	gap: 17px;
	padding-top: 2em;
	max-width: 70em;

	@media (min-width: 320px) and (max-width: 480px) {
		max-width: 100%;
	}
`;

const Element = styled.a`
	box-shadow: #232527 0px 10px 30px -15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    background-color: #232527;
    padding: 2rem 1.75rem;
    border-radius: 3px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
	cursor: pointer;
	color: inherit;
	text-decoration: inherit;

	&:hover {
		transform: scale(1.05);
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

const Img = styled(SimpleImg)`
	/* Change SVG color to #a8b2d1 */
	filter: invert(81%) sepia(11%) saturate(734%) hue-rotate(189deg) brightness(90%) contrast(79%);
	margin-top: 7px;
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
				<Element key={element.name} href={element.url} target="_blank" rel="noopener noreferrer">
					<header>
						<Top>
							<Header>{element.name}</Header>
							<Img src={imageSrc} placeholder="black" width="1.3em" height="1.3em" alt="Open"/>
						</Top>
						{stars ? <p>⭐ {starCount}</p> : ''}
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
