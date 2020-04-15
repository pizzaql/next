import styled from 'styled-components';

const Logo = styled.img`
    width: 2.5em;
    cursor: pointer;
    transition: background-color 0.2s;
    display: inline-flex;
    padding: 10px;
    border-radius: 5px;
    backdrop-filter: saturate(180%) blur(20px);

    &:hover {
        background-color: #2b2d30;
    }
`;

export default Logo;
