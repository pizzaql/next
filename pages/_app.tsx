import React, {useState, useEffect} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {RecoilRoot} from 'recoil';
import {Global, css} from '@emotion/react';
import {ChakraProvider} from '@chakra-ui/react';

import {_cart, CartState} from '../lib/recoil-atoms';
import StateSaver from '../components/state-saver';
import info from '../lib/info';

const client = new ApolloClient({
	uri: process.env.SERVER_URL,
	cache: new InMemoryCache()
});

const App = ({Component, pageProps}: AppProps): JSX.Element => {
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
			<ChakraProvider>
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
					<title>{info.name}</title>
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
