import info from './info';

const {types} = info;

const translatedIngredients = new Map([
	['Cheese', {en: 'Cheese', pl: 'Ser'}],
	['Mushrooms', {en: 'Mushrooms', pl: 'Grzyby'}],
	['Ham', {en: 'Ham', pl: 'Szynka'}],
	['Olives', {en: 'Olives', pl: 'Oliwki'}]
]);

const menu = (lang: 'en' | 'pl') => [
	{
		name: 'Margharita',
		image: 'images/covers/margharita.jpg',
		ingredients: [
			(translatedIngredients.get('Cheese') as { en: string; pl: string})[lang],
			'Oregano'
		],
		variants: [
			{type: types.small[lang], price: 19},
			{type: types.large[lang], price: 24}
		],
		thickCrustFee: 0
	},
	{
		name: 'Pepperoni',
		image: 'images/covers/pepperoni.jpg',
		ingredients: [
			(translatedIngredients.get('Cheese') as { en: string; pl: string})[lang],
			'Pepperoni',
			'Oregano'
		],
		variants: [
			{type: types.small[lang], price: 24},
			{type: types.large[lang], price: 28}
		],
		thickCrustFee: 0
	},
	{
		name: 'Quattro Formaggi',
		image: 'images/covers/quattro-formaggi.jpg',
		ingredients: [
			'Mozzarella',
			'Gorgonzola',
			'Fontina',
			'Parmigiano-Reggiano'
		],
		variants: [
			{type: types.small[lang], price: 23},
			{type: types.large[lang], price: 27}
		],
		thickCrustFee: 0
	},
	{
		name: 'Capricciosa',
		image: 'images/covers/capricciosa.jpg',
		ingredients: [
			(translatedIngredients.get('Cheese') as { en: string; pl: string})[lang],
			(translatedIngredients.get('Mushrooms') as { en: string; pl: string})[lang],
			(translatedIngredients.get('Ham') as { en: string; pl: string})[lang],
			(translatedIngredients.get('Olives') as { en: string; pl: string})[lang]
		],
		variants: [
			{type: types.small[lang], price: 22},
			{type: types.large[lang], price: 26}
		],
		thickCrustFee: 0
	}
];

export default menu;
