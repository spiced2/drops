// USED GUIDE
// https://nuxtjs.org/guide/development-tools#eslint-and-prettier
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'eslint:recommended',
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/recommended',
		'prettier/vue',
		'plugin:prettier/recommended',
	],
	// required to lint *.vue files
	plugins: ['vue'],
	globals: {
		$nuxt: true,
	},
	rules: {
		'prefer-destructuring': ['warn', { object: true, array: false }],
		'no-unused-vars': ['warn'],
		'vue/no-v-html': 0,
		'vue/require-default-prop': 0,
		'vue/html-indent': [
			'error',
			'tab',
			{ alignAttributesVertically: true },
		],
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 20,
				multiline: {
					max: 1,
					allowFirstLine: false,
				},
			},
		],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'never',
					component: 'any',
				},
			},
		],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
