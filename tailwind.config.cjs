/** @type {import('tailwindcss').Config} */
export default {
 content: ["./src/**/*.{html,js,vue}", "./node_modules/tw-elements/dist/js/**/*.js"],
 theme: {
  extend: {
   boxShadow: {
    "primary-input": "0 2px 11px rgba(16, 24, 40, 0.05)",
   },
   animation: {
    "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
   },
   screens: {
    "small-device": "375px",
    "medium-device": "500px",
    "large-device": "768px",
    "desktop-device": "1280px",
   },
  },
 },
 plugins: [require("tailwind-scrollbar-hide"), require("tw-elements/dist/plugin.cjs")],
};
