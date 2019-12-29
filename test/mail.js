import test from 'ava';
import React from 'react';
import render from 'react-test-renderer';

import Mail from '../components/mail';

test('Mail component', t => {
	const tree = render.create(<Mail/>).toJSON();
	t.snapshot(tree);
});
