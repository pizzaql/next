import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Github from '../../pages/components/github';

test('Github renders correctly', async () => {
	const tree = await renderer.create(<Github/>).toJSON();

	expect(tree).toHaveStyleRule('background-color', '#333')
	expect(tree).toHaveStyleRule('background-color', '#444', {
		modifier: ':hover'
	  })
});