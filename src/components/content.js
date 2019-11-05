import React from 'react';
import {Heading, Button, Stack, useColorMode} from '@chakra-ui/core';

import Container from './container';
import Image from './image';
import About from './about';
import Projects from './projects';
import Social from './social';
import Footer from './footer';

const Content = () => {
	const {colorMode, toggleColorMode} = useColorMode();

	return (
		<Container>
			<Image/>
			<br/>
			<Heading as="h1">Antoni Kepinski</Heading>
			<Button width={150} marginTop={5} leftIcon={colorMode === 'light' ? 'moon' : 'sun'} variant="ghost" onClick={toggleColorMode}>
				{`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'}`}
			</Button>
			<Stack paddingTop={25}>
				<About/>
				<br/>
				<Projects/>
				<br/>
				<Social/>
			</Stack>
			<br/>
			<Footer/>
		</Container>
	);
};

export default Content;
