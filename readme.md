# Personal Website
- Web page that describes myself and my programming interests. 
- Website: [https://ericvpineda.github.io/](https://ericvpineda.github.io/)



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"] 
    },
    extend: {},
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
    height: 100vh;
    width: 100%;
}

.nav_links {
    @apply cursor-pointer hover:border-b-2 hover:border-black hover:border-solid
}

.hero_button {
    @apply font-semibold text-sm border-2 border-black rounded-full py-3 px-5 tracking-wider
}

.header_title {
    @apply font-bold text-3xl tracking-wide
}

.section {
    @apply flex justify-center items-center w-full h-[30rem]
}

.section_text {
    @apply font-light
}

.section_border {
    @apply border-black rounded-xl border-2 p-6 flex justify-center flex-col items-center w-full
}

.experience_tech {
    @apply grid grid-cols-4 w-full
}

