import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/assets/**/*.{js,ts,jsx,tsx,mdx}'
		// './app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		fontSize: {
			sm: '0.8rem',
			xs: '1.1rem',
			tiny: '1.18rem',
			base: '1.26rem',
			lg: '1.46rem',
			xl: '1.64rem',
			'2xl': '1.825rem',
			'3xl': '2.2rem',
			'4xl': '2.7rem',
			'5xl': '3.25rem',
			'6xl': '4.3rem',
			'7xl': '5.8rem'
		},
		extend: {
			colors: {
				primary: '#bb44e0',
				black: '#111'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			transitionDuration: {
				DEFAULT: '350ms'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icon': {
					borderRadius: '50%',
					padding: '0.6rem',
					fontSize: '2.7rem',
					transaction: 'box-shadow .4s ease-in-out',
					boxShadow: '0 10px 8px rgba(121, 66, 172, 0.1)',
					color: '#353538',
					'&:hover': {
						boxShadow: '0 10px 25px rgba(121, 66, 172, 0.3)'
					}
				}
			})
			addUtilities({
				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},
				'.flex-center-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}
			})
		})
	]
}
