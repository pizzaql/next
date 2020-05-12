import styled from 'styled-components';

const ExtLink = styled.a`
    background-image: linear-gradient(90deg, var(--light-gray), var(--light-gray));
    background-size: 100% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    text-shadow: .1em 0 #131415,-.1em 0 #131415,.05em 0 #131415,-.05em 0 #131415;
    transition: color var(--transition);
    outline: none;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: var(--light-gray);
    }
`;

export default ExtLink;
