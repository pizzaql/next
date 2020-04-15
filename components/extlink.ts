import styled from 'styled-components';

const ExtLink = styled.a`
	color: #fafff7;
    box-sizing: border-box;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
	box-shadow: inset 0 -1.5px 0 #fff;
	transition: all .2s ease-in-out;
    white-space: nowrap;

    &:hover {
        box-shadow: inset 0 -33px 0 0 #fff;
        color: #1b1b1b
    }
`;

export default ExtLink;
