import React from 'react';
import {Box, Heading, Button, Link} from '@chakra-ui/core';
import {FaGithub, FaTwitter, FaEnvelope} from 'react-icons/fa';

const Social = () => (
	<Box p={5} rounded="lg" shadow="md" borderWidth="1px" maxWidth="35em">
		<Heading as="h2" size="lg">Social Media & Contact</Heading>
		<br/>
		<Link isExternal href="https://github.com/xxczaki">
			<Button m={2} leftIcon={FaGithub} variantColor="gray.600" variant="outline">
    Github
			</Button>
		</Link>
		<Link isExternal href="https://twitter.com/dokwadratu">
			<Button m={2} leftIcon={FaTwitter} variantColor="blue" variant="solid">
    Twitter
			</Button>
		</Link>
		<Link isExternal href="mailto:a@kepinski.me">
			<Button m={2} leftIcon={FaEnvelope} variantColor="green" variant="solid">
    Mail
			</Button>
		</Link>
	</Box>
);

export default Social;
