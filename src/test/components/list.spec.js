import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import List from '../../components/list';

test('List renders correctly', async () => {
	const tree = await renderer.create(<List/>).toJSON();

	expect(tree).toMatchSnapshot();
});
