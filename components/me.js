import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';
import Tilt from 'react-tilted';

import imageSrc from '../public/images/me.jpg';
import imagePlaceholder from '../public/images/placeholder.svg';

const Wrapper = styled.div`
	border: 10px solid #212121;
	transform: rotate(2deg);
`;

const Me = () => (
	<Tilt>
		<Wrapper>
			<SimpleImg src={imageSrc} placeholder={imagePlaceholder} draggable={false} width="18em" height="auto" alt="Me"/>
		</Wrapper>
	</Tilt>
);

export default Me;
