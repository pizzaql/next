import React from 'react';
import {shallow} from 'enzyme';

import Github from '../src/components/github';

test('it works', () => {
	const wrapper = shallow(<Github/>);
	expect(wrapper).toMatchSnapshot();
});
