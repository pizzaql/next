import styled from 'styled-components';

const Box = styled.div`
	font-size: 1em;
	max-width: 45em;
	padding-bottom: 3em;
	padding-right: 5em;

	@media (min-width: 320px) and (max-width: 480px) {
		padding-right: 0;
	}
`;

export default Box;
