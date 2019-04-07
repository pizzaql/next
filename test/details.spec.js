import React from 'react';
import {shallow} from 'enzyme';

import Details from '../src/components/details';

test('it works', () => {
	const wrapper = shallow(<Details/>);
	expect(wrapper).toMatchSnapshot();
});
