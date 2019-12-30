import React from 'react';
import styled, {keyframes} from 'styled-components';

const shake = keyframes`
	10%, 90% {
		transform: translate3d(-1px, 0, 0);
	}
	20%, 80% {
		transform: translate3d(2px, 0, 0);
	}
	30%, 50%, 70% {
		transform: translate3d(-4px, 0, 0);
	}
	40%, 60% {
		transform: translate3d(4px, 0, 0);
	}
`;

const Animated = styled.div`
	&:hover {
		animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
  		transform: translate3d(0, 0, 0);
  		backface-visibility: hidden;
  		perspective: 1000px;
	}
`;

const Wrapper = styled.a`
	text-align: center;
	text-decoration: none;
	color: #fff;
    font-size: 25px;
`;

const Mail = () => (
	<Animated>
		<Wrapper href="mailto:a@kepinski.me">
			a@kepinski.me
		</Wrapper>
	</Animated>
);

export default Mail;
