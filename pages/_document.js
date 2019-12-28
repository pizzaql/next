import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props}/>)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="pl">
				<Head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<meta name="description" content="Hi, my name is Antoni Kepinski and I like programming, especially in JavaScript & Rust. Come and visit my site!"/>
					<meta name="theme-color" content="#121212"/>
					<meta name="msapplication-TileColor" content="#121212"/>
					<meta name="apple-mobile-web-app-capable" content="yes"/>
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
					<meta name="twitter:card" content="summary"/>
					<meta name="twitter:title" content="Antoni Kepinski"/>
					<meta name="twitter:description" content="Hi, my name is Antoni Kepinski and I like programming, especially in JavaScript & Rust. Come and visit my site!"/>
					<meta name="og:title" content="Antoni Kepinski"/>
					<meta name="og:description" content="Hi, my name is Antoni Kepinski and I like programming, especially in JavaScript & Rust. Come and visit my site!"/>
					<meta name="og:url" content="https://kepinski.me"/>
					<meta name="og:site_name" content="Antoni Kepinski"/>
					<meta name="og:type" content="website"/>
					<link rel="manifest" href="/manifest.json"/>
					<link rel="icon" href="/favicon.png"/>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
