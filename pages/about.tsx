import React from 'react';
import {NextPage} from 'next';
import {SimpleImg} from 'react-simple-img';

import Main from '../components/main';
import ExtLink from '../components/extlink';
import Skills from '../components/skills';
import Social from '../components/social';

import placeholder from '../public/images/me-placeholder.svg';
import imageMedium from '../public/images/me-446.jpg';
import imageSmall from '../public/images/me-200.jpg';
import imageBig from '../public/images/me-767.jpg';

const imageSrcSet = `${imageSmall} 200w, ${imageMedium} 446w, ${imageBig} 767w`;

const Index: NextPage<unknown> = () => {
	return (
		<Main>
			<SimpleImg
				sizes="(max-width: 767px) 100vw, 767px"
				srcSet={imageSrcSet}
				src={imageBig}
				placeholder={placeholder}
				// @ts-ignore
				draggable={false}
				alt="Me"
				width="15em"
				height="15em"
				importance="high"
				imgStyle={{borderRadius: '20px'}}
			/>
			<h1>Hi, my name is Antoni.</h1>
			<p>
				I&apos;m a 17 years old developer, currently based near Poznań, Poland.
				Since late 2019 I&apos;m helping maintain <ExtLink href="https://github.com/node-fetch/node-fetch">node-fetch</ExtLink>, a lightweight library, which brings window.fetch API to Node.js.
				I also maintain a collection of my own open source projects.
				When it comes to offline activities, I hugely enjoy travelling, riding a bike and listening to music.
			</p>
			<p>Here are a few technologies I&apos;ve been working with recently:</p>
			<Skills/>
			<p>Connect with me:</p>
			<Social/>
		</Main>
	);
};

export default Index;
