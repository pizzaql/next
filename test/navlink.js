import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import NavLink from '../components/navlink';

test('NavLink component', t => {
	const tree = render.create(<NavLink/>).toJSON();
	t.snapshot(tree);
});
