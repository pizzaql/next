import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';
import Tilt from 'react-parallax-tilt';

import imageSrc from '../public/images/me.jpg';
// eslint-disable-next-line import/extensions
import imageSrcSet from '../public/images/me.jpg?sizes[]=300&sizes[]=600&sizes[]=1000';
import imagePlaceholder from '../public/images/placeholder.svg';

const Wrapper = styled.div`
	border: 10px solid #212121;
	transform: rotate(2deg);
`;

const Me = () => (
	<Tilt>
		<Wrapper>
			<SimpleImg src={imageSrc} srcSet={imageSrcSet} placeholder={imagePlaceholder} width="18em" height="auto" alt="Me"/>
		</Wrapper>
	</Tilt>
);

export default Me;
