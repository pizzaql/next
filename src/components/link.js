import styled from 'styled-components';

const Link = styled.a`
    color: #fafff7;
    box-sizing: border-box;
    text-decoration: underline;
    user-select: none;
    
    &:hover {
    text-decoration: none;
    background: #fdfdfd;
    color: #1b1b1b
  }
`;

export default Link;
