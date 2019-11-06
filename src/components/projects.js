import React from 'react';
import {Box, Heading, Button, Stack, Text, Tag, Link} from '@chakra-ui/core';

import projects from './projects.json';
import getTagColor from './utils/tag-color';

const Projects = () => {
	return (
		<Box p={5} rounded="lg" shadow="md" borderWidth="1px" maxWidth="35em">
			<Heading as="h2" size="lg">Projects</Heading>
			<br/>
			<Text>Here are some of my projects:</Text>
			<br/>
			{projects.map(el => (
				<React.Fragment key={el.name}>
					<Box key={el.name} p={5} rounded="lg" shadow="md">
						<Heading paddingBottom={2} as="h3" size="md">{el.name}</Heading>
						<Stack isInline spacing={2}>
							{el.tags.map(tag => (
								<Tag key={tag} style={{color: getTagColor(tag).color}} backgroundColor={getTagColor(tag).background} size="sm">{tag}</Tag>
							))}
						</Stack>
						<Text paddingTop={3}>{el.description}</Text>
						<Link isExternal href={el.url}>
							<Button marginTop={5} leftIcon="external-link" variantColor="gray.600" variant="outline">
    Check it out
							</Button>
						</Link>
					</Box>
					<br/>
				</React.Fragment>
			))}
		</Box>
	);
};

export default Projects;
