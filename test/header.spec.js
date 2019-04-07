import React from 'react';
import {shallow} from 'enzyme';

import Header from '../src/components/header';

test('it works', () => {
	const wrapper = shallow(<Header/>);
	expect(wrapper).toMatchSnapshot();
});
