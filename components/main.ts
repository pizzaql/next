import styled from 'styled-components';

const Main = styled.main`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	line-height: 1.9;
	max-width: var(--main-content);
	padding: 4rem 1.5rem 1.5rem;
	align-items: flex-start;

	@media (min-width: 150px) and (max-width: 891px) {
		padding: 1.5rem;
	}
`;

export default Main;
