import React from 'react';
import {useRecoilTransactionObserver_UNSTABLE} from 'recoil';

import {_cart} from '../lib/recoil-atoms';

interface Props {
	children: React.ReactNode;
}

const StateSaver = ({children}: Props): JSX.Element => {
	useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
		const cart = snapshot.getLoadable(_cart).contents;

		localStorage.setItem('cart', JSON.stringify(cart));
	});

	// @ts-expect-error
	return children;
};

export default StateSaver;
