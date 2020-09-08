import styled from 'styled-components';

const ExtLink = styled.a`
    background-image: linear-gradient(90deg, var(--light-accent), var(--light-accent));
    background-size: 100% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    text-shadow: .1em 0 var(--background),-.1em 0 var(--background),.05em 0 var(--background),-.05em 0 var(--background);
    transition: color var(--transition);
    outline: none;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: var(--light-accent);
    }
`;

export default ExtLink;
