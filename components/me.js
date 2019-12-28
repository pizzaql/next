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
	<Wrapper>
		<Tilt>
			<SimpleImg alt="Me" src={imageSrc} placeholder={imagePlaceholder} width="20em" height="auto"/>
		</Tilt>
	</Wrapper>
);

export default Me;
