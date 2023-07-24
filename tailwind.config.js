/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'Brighter-Cyan': 'hsl(179, 47%, 52%)',
				'Default-Cyan': 'hsl(179, 62%, 43%)',
				'Bright-Yellow': 'hsl(71, 73%, 54%)',
				'Dark-Yellow': 'hsl(71, 56%, 47%)',
				'Light-Gray': 'hsl(204, 43%, 93%)',
				'Grayish-Blue': 'hsl(218, 22%, 67%)',
			},
			fontFamily: {
				Karla: ['Karla', 'sans-serif'],
			},
			boxShadow: {
				mainshadow: '0rem 0.9375rem 1.875rem rgba(0, 81, 171, 0.148847)',
				shadowbutton: '0rem 0.625rem 0.625rem rgba(0, 0, 0, 0.0973011)',
			},
		},
	},
	plugins: [],
};
