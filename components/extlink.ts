import styled from 'styled-components';

const ExtLink = styled.a`
    background-image: linear-gradient(90deg, #666, #666);
    background-size: 100% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    text-shadow: .1em 0 #131415,-.1em 0 #131415,.05em 0 #131415,-.05em 0 #131415;
    transition: color 0.1s ease-in-out;
    outline: none;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: #666;
    }
`;

export default ExtLink;
