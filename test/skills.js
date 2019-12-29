import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Skills from '../components/skills';

test('Skills component', t => {
	const tree = render.create(<Skills/>).toJSON();
	t.snapshot(tree);
});
