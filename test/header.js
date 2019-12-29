import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Header from '../components/header';

test('Header component', t => {
	const tree = render.create(<Header/>).toJSON();
	t.snapshot(tree);
});
