import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Description from '../../pages/components/description';

test('Description renders correctly', async () => {
	const tree = await renderer.create(<Description/>).toJSON();

	expect(tree).toMatchSnapshot();
});
