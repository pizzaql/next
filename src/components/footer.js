import React from 'react';
import {Text, Link} from '@chakra-ui/core';

const Footer = () => (
	<footer>
		<Text>Copyright © 2019 <Link href="#" color="teal.500">Antoni Kepinski</Link></Text>
		<Link isExternal href="https://github.com/xxczaki/kepinski.me" color="teal.500">
			Source code
		</Link>
	</footer>
);

export default Footer;
