import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
	text-align: center;
	text-decoration: none;
	color: #fff;
    font-size: 25px;
	box-shadow: inset 0 -3px 0 #424242;
	transition: all .2s ease-in-out;

	&:hover {
		box-shadow: inset 0 -33px 0 0 #424242;
	}
`;

const Mail = () => (
	<Wrapper href="mailto:a@kepinski.me">
			a@kepinski.me
	</Wrapper>
);

export default Mail;
