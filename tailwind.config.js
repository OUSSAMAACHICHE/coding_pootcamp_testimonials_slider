/** @type {import('tailwindcss').Config} */
export const content = ["index.html", "./src/**/.{js,css}"];
export const theme = {
  extend: {
    colors: {
      "dark_blue":"hsl(240, 38%, 20%)",
      "grayish_blue":"hsl(240, 18%, 77%)",
    },
  },
};
export const plugins = [];

