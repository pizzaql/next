import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {ColorModeScript} from '@chakra-ui/core';

import info from '../lib/info';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="description" content={info.description}/>
					<meta name="theme-color" content="#131415"/>
					<meta name="msapplication-TileColor" content="#131415"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<meta name="twitter:card" content="summary_large_image"/>
					<meta name="twitter:site" content="https://pizzaql.vercel.app"/>
					<meta name="twitter:title" content={info.name}/>
					<meta name="twitter:description" content={info.description}/>
					<meta name="twitter:image" content=""/>
					<meta property="og:title" content={info.name}/>
					<meta property="og:site_name" content={info.name}/>
					<meta property="og:url" content="https://pizzaql.vercel.app"/>
					<meta property="og:description" content={info.description}/>
					<meta property="og:type" content="website"/>
					<meta property="og:image" content=""/>
					<link rel="manifest" href="/manifest.json"/>
					<link rel="icon" href="/favicon.png"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
				</Head>
				<body>
					<ColorModeScript defaultColorMode="light"/>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
