import {ColorPalette} from '@styled-icons/ionicons-outline';
import styled from 'styled-components';

const ThemeChange = styled(ColorPalette)`
    width: 1.5em;
    cursor: pointer;
    transition: background-color var(--transition);
    display: inline-flex;
	padding: 5px;
	border-radius: var(--inline-radius);
	margin-left: var(--gap-half);
	color: var(--text);

    &:hover {
        background-color: var(--hover);
    }
`;

export default ThemeChange;
