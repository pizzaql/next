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

	return {background: 'gray', color: '#fff'};
};

export default getTagColor;
