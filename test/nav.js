import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Nav from '../components/nav';

test('Nav component', t => {
	const tree = render.create(<Nav/>).toJSON();
	t.snapshot(tree);
});
