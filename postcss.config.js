/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [require('autoprefixer'), require('tailwindcss')],
};

export default config;
