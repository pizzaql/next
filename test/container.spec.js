import React from 'react';
import {shallow} from 'enzyme';

import Container from '../src/components/container';

test('it works', () => {
	const wrapper = shallow(<Container/>);
	expect(wrapper).toMatchSnapshot();
});
