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
                // background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '#001f3f',
                primary2: '#003366',
                sandy: '#f0e4d7',
                secblue: '#00aaff',
                secblue2: '#7fdbff',
                secgreen: '#2ecc71',
                secgreen2: '#26a69a',
            },
        },
    },
    plugins: [],
};
export default config;
