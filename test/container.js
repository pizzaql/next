import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Container from '../components/container';

test('Container component', t => {
	const tree = render.create(<Container/>).toJSON();
	t.snapshot(tree);
});
