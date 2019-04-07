import React from 'react';
import {shallow} from 'enzyme';

import List from '../src/components/list';

test('it works', () => {
	const wrapper = shallow(<List/>);
	expect(wrapper).toMatchSnapshot();
});
