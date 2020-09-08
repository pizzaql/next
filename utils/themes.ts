export type Theme = {
	[name: string]: {
		background: string;
		text: string;
		accent: string;
		lightAccent: string;
		hover: string;
		selection: string;
		header: string;
		headerBorder: string;
	};
};

export const themes: Theme = {
	dark: {
		background: '#131415',
		text: '#fff',
		accent: '#222',
		lightAccent: '#666',
		hover: '#2b2d30',
		selection: 'hsl(0deg 0% 100% / 99%)',
		header: '#131415ab',
		headerBorder: 'rgba(255, 255, 255, 0.5)'
	},
	light: {
		background: '#fff',
		text: '#121212',
		accent: '#f7f7f9',
		lightAccent: '#ddd',
		hover: '#ddd',
		selection: '#121212',
		header: '#eeeeeeab',
		headerBorder: 'rgba(255, 255, 255, 0.1)'
	}
};
