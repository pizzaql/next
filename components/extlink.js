import styled from 'styled-components';

const ExtLink = styled.a`
	color: #fafff7;
    box-sizing: border-box;
    text-decoration: underline;
    user-select: none;
    cursor: pointer;

    &:hover {
        text-decoration: none;
        background: #fdfdfd;
        color: #1b1b1b
    }
`;

export default ExtLink;
