module.exports = {
    content: ['./src/**/*.{html,js}'],
    plugins: [require('tailwindcss-visibility')],
    theme: {
        extend: {
            sizeHint: {
                xs: '100px',
                '2xl': '1000px',
                custom: '250px',
            },
        },
    },
};
