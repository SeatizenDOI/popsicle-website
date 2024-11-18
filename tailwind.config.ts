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
                primary_red: 'var(--primary_red)',
                primary_text: 'var(--primary_text)',
            },
        },
    },
    plugins: [],
};
export default config;
