import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Vector from '../../pages/components/vector';

test('Vector renders correctly', async () => {
	const tree = await renderer.create(<Vector/>).toJSON();

	expect(tree).toMatchSnapshot();
});
