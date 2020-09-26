type Item = {name: string; type: string; price: number; quantity: number};

export const merge = (items: Item[], item: Item) => {
	const same = items.find(element => element.name === item.name && element.type === item.type);

	if (same) {
		return [{name: item.name, type: item.type, price: item.price, quantity: same.quantity + item.quantity}, ...items.filter(element => element.name !== item.name && element.type !== item.type)];
	}

	return [item, ...items];
};
