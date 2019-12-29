import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Box from '../components/box';

test('Box component', t => {
	const tree = render.create(<Box/>).toJSON();
	t.snapshot(tree);
});
