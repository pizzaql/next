import styled from 'styled-components';

const Github = styled.a`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 10px;
  border: none;
  border-radius: 3px;
  transition: background 0.8s;
  background-color: #333;
  background-position: center;
  text-decoration: none;
  user-select: none;
  outline: none;

    &:hover {
        background: #3b3b3b radial-gradient(circle, transparent 1%, #3b3b3b 1%) center/15000%;
    }
`;

export default Github;
