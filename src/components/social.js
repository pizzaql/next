import React from 'react';
import {Box, Heading, Button} from '@chakra-ui/core';
import {FaGithub, FaTwitter, FaEnvelope} from 'react-icons/fa';

const Social = () => (
	<Box p={5} rounded="lg" shadow="md" borderWidth="1px" maxWidth="35em">
		<Heading as="h2" size="lg">Social Media & Contact</Heading>
		<br/>
		<a href="https://github.com/xxczaki" target="_blank" rel="noopener noreferrer">
			<Button m={2} leftIcon={FaGithub} variantColor="gray" variant="solid">
    Github
			</Button>
		</a>
		<a href="https://twitter.com/dokwadratu" target="_blank" rel="noopener noreferrer">
			<Button m={2} leftIcon={FaTwitter} variantColor="blue" variant="solid">
    Twitter
			</Button>
		</a>
		<a href="mailto:a@kepinski.me" target="_blank" rel="noopener noreferrer">
			<Button m={2} leftIcon={FaEnvelope} variantColor="green" variant="solid">
    Mail
			</Button>
		</a>
	</Box>
);

export default Social;
