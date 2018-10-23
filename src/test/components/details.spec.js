import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Details from '../../components/details';

test('Details renders correctly', async () => {
	const tree = await renderer.create(<Details/>).toJSON();

	expect(tree).toMatchSnapshot();
});
