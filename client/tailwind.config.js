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
                medium: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
            }

        },
        spacing: {
            
        },
        colors: {
            white: 'white',
            black: 'black',
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