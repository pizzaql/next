import styled from 'styled-components';

interface Props {
	belowImg?: boolean;
}

const Heading = styled.h1`
	padding-top: ${(props: Props) => props.belowImg ? '0' : '5em'};
`;

export default Heading;
