import styled from 'styled-components';

const ThemePicker = styled.div`
	background-color: var(--accent);
	padding: 1rem;
	transition: all var(--transition-slow);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;

	h3 {
		text-align: center;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin: 0;
    	line-height: 1.2;
		font-size: 1rem;
	}
`;

export default ThemePicker;
