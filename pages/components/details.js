import styled from 'styled-components';

const Details = styled.details`
    margin: 1em 0;
    cursor: pointer;

    summary::-webkit-details-marker {
    font-size: 0.8em;
    margin-right: 0.8em
  }
`;

export default Details;
