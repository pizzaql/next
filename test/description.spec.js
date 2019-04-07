import React from 'react';
import {shallow} from 'enzyme';

import Description from '../src/components/description';

test('it works', () => {
	const wrapper = shallow(<Description/>);
	expect(wrapper).toMatchSnapshot();
});
