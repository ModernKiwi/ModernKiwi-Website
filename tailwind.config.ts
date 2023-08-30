import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			blacks: colors.black,
			whites: colors.white,
			grey: colors.slate,
			test: colors.indigo,
		},
		extend: {},
	},
	prefix: 'tw-',
	plugins: [],
} satisfies Config;
