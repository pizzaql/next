
import styled from 'styled-components';

const Section = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	padding: 1rem;
	max-width: 50rem;

	::-webkit-scrollbar {
		width: 0px;
		background-color: rgba(255, 255, 255, 0.1);
		height: 4px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #fff;
		height: 2px;
	}

	::-webkit-scrollbar-track {
		background-color: rgba(255, 255, 255, 0.05);
		height: 4px;
	}
`;

export default Section;
