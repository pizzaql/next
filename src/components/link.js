import styled from 'styled-components';

const Link = styled.a`
    color: #fafff7;
    box-sizing: border-box;
    text-decoration: none;
    user-select: none
    
    &&:hover {
        text-decoration: none;
        background: #353735;
        color: #fdfdfd
    }
`

export default Link;