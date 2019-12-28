import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto 30px;
	padding-left: 5em;

	@media (min-width: 320px) and (max-width: 480px) {
		padding-left: 20px;
		padding-right: 20px;
	}
`;

export default Container;
