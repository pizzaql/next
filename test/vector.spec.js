import React from 'react';
import {shallow} from 'enzyme';

import Vector from '../src/components/vector';

test('it works', () => {
	const wrapper = shallow(<Vector/>);
	expect(wrapper).toMatchSnapshot();
});
