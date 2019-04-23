import React from 'react';
import {withPrefix} from 'gatsby';

import List from './list';
import Link from './link';
import Github from './github';
import Vector from './vector';
import Tag from './tag';
import projects from './projects.json';

const tag = tags => {
	const getTagColor = name => {
		if (name === 'React') {
			return {background: '#61dbfb', color: '#000'};
		}

		if (name === 'Node.js') {
			return {background: '#68a063', color: '#000'};
		}

		if (name === 'TypeScript') {
			return {background: '#007acc', color: '#fff'};
		}

		if (name === 'GraphQL') {
			return {background: '#e535ab', color: '#000'};
		}

		if (name === 'Next.js') {
			return {background: '#000', color: '#fff'};
		}

		if (name === 'Electron') {
			return {background: '#2f3243', color: '#fff'};
		}
	};

	return tags.map(tag => <Tag key={tag} style={{backgroundColor: getTagColor(tag).background, color: getTagColor(tag).color}}>{tag}</Tag>);
};

const Projects = () => (
	<>
		<List>
			{projects.map(el => (
				<li key={el.name}><Link href={el.url} target="_blank" rel="noopener">{el.name}</Link> {tag(el.tags)}</li>
			))}
		</List>
		<Github href="https://github.com/xxczaki?tab=repositories" target="_blank" rel="noopener"><Vector draggable="false" importance="low" loading="lazy" src={withPrefix('/img/github.svg')} alt="Github"/>See more on GitHub</Github>
	</>
);

export default Projects;
