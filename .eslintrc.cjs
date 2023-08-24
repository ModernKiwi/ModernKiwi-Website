/** @type {import('eslint').Linter.Config} */

module.exports = {
	root: true,
	extends: [
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'plugin:tailwindcss/recommended',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js'],
			parser: '@typescript-eslint/parser',
		},
	],
};
