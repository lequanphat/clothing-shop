/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
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
            // Configure your color palette here
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
