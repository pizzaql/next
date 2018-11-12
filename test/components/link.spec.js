import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Link from '../../pages/components/link';

test('Link renders correctly', async () => {
	const tree = await renderer.create(<Link/>).toJSON();

	expect(tree).toHaveStyleRule('color', '#fafff7')
	expect(tree).toHaveStyleRule('color', '#1b1b1b', {
		modifier: ':hover'
	  })
});