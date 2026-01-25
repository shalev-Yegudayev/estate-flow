// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
    './src/**/*.{js,ts,jsx,tsx}', // ← replace @source
];
export const theme = {
    extend: {},
};
export const plugins = [
    import('tw-animate-css'),
];
