import styled from 'styled-components';

const Theme = styled.a<{background: string; color: string; selected: boolean}>`
	background: ${props => props.background};
	color: ${props => props.color ?? '#121212'};
    display: inline-block;
    width: 120px;
    padding: 5px;
    flex: 0 0 auto;
    border-bottom-style: none;
    border-radius: var(--radius);
	${props => props.selected && 'border: 2px solid rgb(0, 93, 255)'};
    transition: all 150ms ease-in-out;
	text-align: center;
	justify-content: center;
	text-decoration: none;
	user-select: none;
	cursor: pointer;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 2px 16px rgba(0,0,0,.15);
	}
`;

export default Theme;
