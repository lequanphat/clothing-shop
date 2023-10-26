/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
const config =  {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                grow: {
                    '0%': { width: '0%' },
                    '50%': { width: '35%' },
                    '100%': { width: '70%' },
                },
            },
            boxShadow:{
                medium: '#4cd137 0px 1px 0px',
            }

        },
        spacing: {
            
        },
        colors: {
            primary: '#f3c60f',
        },
        screens: {
            tablet: '740px',
            laptop: '1024px',
            desktop: '1280px',
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: '50px' },
                h2: { fontSize: theme('fontSize.xl') },
                h3: { fontSize: theme('fontSize.lg') },
            });
        }),
    ],
    darkMode: 'class',
};
export default config;