import styled from 'styled-components';

const Footer = styled.footer`
	height: 32px;
	margin: calc(var(--small-gap) + var(--gap)) auto;
	padding: 0 1rem;
	max-width: var(--main-content);
	display: flex;
	align-items: center;
	justify-content: space-between;
    color: var(--text);
    font-size: 0.85em;
    opacity: 0.5;
`;

export default Footer;
