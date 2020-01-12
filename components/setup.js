import React from 'react';
import styled from 'styled-components';
import {SimpleImg} from 'react-simple-img';

import imageSrc from '../public/images/setup.jpg';
import imagePlaceholder from '../public/images/setup-placeholder.svg';

const Wrapper = styled.div`
	border: 5px solid #212121;
	width: 20em;
`;

const Setup = () => (
	<Wrapper>
		<SimpleImg src={imageSrc} placeholder={imagePlaceholder} draggable={false} width="20em" height="auto" alt="Setup Picture"/>
	</Wrapper>
);

export default Setup;
