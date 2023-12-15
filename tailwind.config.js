/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.js', './src/**/*.jsx'],
    theme: {
        extend: {
            colors: {
                brand: '#E07B67',
                dark10: '#121214',
                dark20: '#17171A',
                dark30: '#202024',
                gray10: '#252529',
                gray20: '#AFABB6',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                space: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
