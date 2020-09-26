import {atom} from 'recoil';

export interface CartState {
	items: Array<{name: string; type: string; price: number; quantity: number}>;
	total: number;
}

// Cart
export const _cart = atom<CartState>({
	key: 'theme',
	default: {
		items: [],
		total: 0
	}
});
