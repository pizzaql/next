import React from 'react';
import {Link} from 'gatsby';

// Import components
import Container from '../components/container';
import Seo from '../components/seo';

const NotFoundPage = () => (
	<Container>
		<Seo title="404: Not found"/>
		<h1>Page not found</h1>
		<p>You just hit a route that doesn&#39;t exist... Maybe you should <Link to="/">go back to the homepage</Link></p>
	</Container>
);

export default NotFoundPage;
