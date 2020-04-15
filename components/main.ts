import styled from 'styled-components';

const Main = styled.main`
	display: flex;
    align-items: flex-start;
	flex-wrap: wrap;

	@media (min-width: 320px) and (max-width: 480px) {
		align-items: center;
		justify-content: center;
	}
`;

export default Main;
