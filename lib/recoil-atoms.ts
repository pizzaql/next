import {atom} from 'recoil';

// Theme
export const _theme = atom<'dark' | 'light'>({
	key: 'theme',
	default: 'dark'
});
