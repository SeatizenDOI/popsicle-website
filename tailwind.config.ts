import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary_orange: 'var(--primary_orange)',
                secondary_orange: 'var(--secondary_orange)',
                tertiary_orange: 'var(--tertiary_orange)',
                primary_red: 'var(--primary_red)',
                secondary_red: 'var(--secondary_red)',
                primary_text: 'var(--primary_text)',
                primary_grey: 'var(--primary_grey)',
                secondary_grey: 'var(--secondary_grey)',
                secondary_white: 'var(--secondary_white)',
            },
        },
    },
    plugins: [],
};
export default config;
