import React from 'react';
import {Box, Heading, Text, Link} from '@chakra-ui/core';

const About = () => (
	<Box p={5} rounded="lg" shadow="md" borderWidth="1px" maxWidth="35em">
		<Heading as="h2" size="lg">About me</Heading>
		<br/>
		<Text>
            Hi! My name is Antoni and I&apos;m 16. I like programming, especially in JavaScript & Rust.
            I also contribute to various open source projects.
		</Text>
		<br/>
		<Text>
            When it comes to offline activities, I hugely enjoy travelling and riding a bike <span role="img" aria-label="bike emoji">🚴</span>
		</Text>
		<br/>
		<Text>I&apos;m currently maintaining <Link isExternal href="https://github.com/bitinn/node-fetch" color="teal.500">node-fetch</Link>, an open-source library, that brings window.fetch API to Node.js</Text>
	</Box>
);

export default About;
