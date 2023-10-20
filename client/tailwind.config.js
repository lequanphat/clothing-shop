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
        },
        spacing: {
            1: '8px',
            2: '12px',
            3: '16px',
            4: '24px',
            5: '32px',
            6: '48px',
            '35px': '35px',
        },
        colors: {
            primary: '#333',
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