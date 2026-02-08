/** @type {import('tailwindcss').Config} */
import textShadow from 'tailwindcss-textshadow';
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#12111C',
                secondary: '#ffffff',
                accent: '#FFC857',
            },
            screens: {

                'sm': '300px',
                'md': '768px',
                'lg': '1024px',

            },



        },
    },
    plugins: [textShadow],
}