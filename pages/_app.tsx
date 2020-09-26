import React, {useState, useEffect} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {RecoilRoot} from 'recoil';
import {Global, css} from '@emotion/core';
import {ChakraProvider} from '@chakra-ui/core';
import debounce from 'lodash.debounce';
import nprogress from 'nprogress';

import {_cart, CartState} from '../lib/recoil-atoms';
import StateSaver from '../components/state-saver';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
	start.cancel();
	nprogress.done();
	window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', () => {
	start.cancel();
	nprogress.done();
});

const client = new ApolloClient({
	uri: process.env.HASURA_ENDPOINT,
	cache: new InMemoryCache(),
	headers: {
		'x-hasura-admin-secret': process.env.HASURA_SECRET ?? ''
	}
});

const App = ({Component, pageProps}: Readonly<AppProps>): JSX.Element => {
	const [cart, setCart] = useState<CartState | undefined>(undefined);

	useEffect(() => {
		const previous = localStorage.getItem('cart');

		if (previous) {
			try {
				setCart(JSON.parse(previous));
			} catch {
				setCart({items: [], total: 0});
			}
		} else {
			localStorage.setItem('cart', JSON.stringify({items: [], total: 0}));
			setCart({items: [], total: 0});
		}
	}, []);

	return (
		<ApolloProvider client={client}>
			<ChakraProvider resetCSS>
				<Global
					styles={css`
						body {
							position: relative;

							  &::before {
								content: ' ';
								position: fixed;
								width: 100%;
								height: 100%;
								top: 0;
								left: 0;
								background-color: white;
								background: url('images/background.jpg') no-repeat center center;
								background-size: cover;
								will-change: transform;
								z-index: -1;
  							}
						}
      				`}
				/>
				<Head>
					<title>Smart Pizza</title>
				</Head>
				{cart && (
					<RecoilRoot
						initializeState={({set}) => {
							if (cart) {
								set(_cart, cart);
							}
						}}
					>
						<StateSaver>
							<Component {...pageProps}/>
						</StateSaver>
					</RecoilRoot>
				)}
			</ChakraProvider>
		</ApolloProvider>
	);
};

export default App;
