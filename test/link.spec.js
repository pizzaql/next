import React from 'react';
import {shallow} from 'enzyme';

import Link from '../src/components/link';

test('it works', () => {
	const wrapper = shallow(<Link/>);
	expect(wrapper).toMatchSnapshot();
});
