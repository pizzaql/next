import {Flash} from '@styled-icons/ionicons-outline';
import styled from 'styled-components';

const Logo = styled(Flash)`
    width: 2.35em;
    cursor: pointer;
    transition: background-color var(--transition);
    display: inline-flex;
	padding: 5px;
	margin: -10px;
	border-radius: var(--inline-radius);
	margin-right: var(--gap-half);
	color: var(--text);

    &:hover {
        background-color: var(--hover);
    }
`;

export default Logo;
