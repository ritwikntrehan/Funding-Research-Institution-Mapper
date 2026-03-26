import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        atlas: '#365b8a',
        ink: '#1f2a37',
        mist: '#f4f7fb',
      },
    },
  },
  plugins: [],
};

export default config;
