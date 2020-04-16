import styled from 'styled-components';

const Logo = styled.img`
    width: 2.5em;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    display: inline-flex;
    padding: 10px;
	border-radius: 5px;
	margin: -10px;
	margin-right: 0.5rem;

    &:hover {
        background-color: #2b2d30;
    }
`;

export default Logo;
