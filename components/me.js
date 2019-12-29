import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';
import Tilt from 'react-parallax-tilt';

import imageSrc from '../public/images/me.jpg';
import imagePlaceholder from '../public/images/placeholder.svg';

const Wrapper = styled.div`
	border: 10px solid #212121;
	transform: rotate(2deg);
`;

const Me = () => (
	<Tilt gyroscope>
		<Wrapper>
			<SimpleImg src={imageSrc} placeholder={imagePlaceholder} width="18em" height="auto" alt="Me"/>
		</Wrapper>
	</Tilt>
);

export default Me;
