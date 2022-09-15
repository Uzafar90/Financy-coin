/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				main_bg_color: '#464646',
				second_bg_color: '#000000',
				nav_foot_color: '#272727',
				dark_green: '#012210',
				dark_gray: '#1F1F1F',
				bor_color: '#9C4500',
			},
			textColor: {
				main_txt_color: '#ffffff',
				second_txt_color: '#ECECEC',
				head_txt_color: '#FF7100',
				neg_txt_color: '#FF0000',
				pos_txt_color: '#02B755',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
