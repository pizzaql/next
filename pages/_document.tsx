import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {ColorModeScript} from '@chakra-ui/core';

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
					<meta name="description" content=""/>
					<meta name="theme-color" content="#131415"/>
					<meta name="msapplication-TileColor" content="#131415"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<meta name="twitter:card" content="summary_large_image"/>
					<meta name="twitter:site" content=""/>
					<meta name="twitter:title" content=""/>
					<meta name="twitter:description" content=""/>
					<meta name="twitter:image" content=""/>
					<meta property="og:title" content=""/>
					<meta property="og:site_name" content=""/>
					<meta property="og:url" content=""/>
					<meta property="og:description" content=""/>
					<meta property="og:type" content="website"/>
					<meta property="og:image" content=""/>
					<link rel="manifest" href="/manifest.json"/>
					<link rel="icon" href="/favicon.png"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
				</Head>
				<body>
					<ColorModeScript defaultColorMode="dark"/>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}
