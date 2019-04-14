import React from 'react';
import {withPrefix} from 'gatsby';

import List from './list';
import Link from './link';
import Github from './github';
import Vector from './vector';
import projects from './projects.json';

const Projects = () => (
	<>
		<List>
			{projects.map(el => (
				<li key={el.name}><Link href={el.url} target="_blank" rel="noopener">{el.name}</Link></li>
			))}
		</List>
		<Github href="https://github.com/xxczaki?tab=repositories" target="_blank" rel="noopener"><Vector draggable="false" importance="low" loading="lazy" src={withPrefix('/img/github.svg')} alt="Github"/>See more on GitHub</Github>
	</>
);

export default Projects;
