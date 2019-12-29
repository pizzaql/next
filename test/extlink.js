import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import ExtLink from '../components/extlink';

test('ExtLink component', t => {
	const tree = render.create(<ExtLink/>).toJSON();
	t.snapshot(tree);
});
