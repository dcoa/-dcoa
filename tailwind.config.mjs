/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				loaded: {
					'0%': {
						opacity: 0,
						transform: 'scale(90%)',
						'animation-timing-function': 'ease',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(100%)'
					}
				}
			},
			animation: {
				loaded: ' 0.8s linear 0s both loaded'
			}
		},
	},
	plugins: [require('tailwindcss-animated')],
}
