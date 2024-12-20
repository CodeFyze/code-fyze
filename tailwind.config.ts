import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
  content: {
    files: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    extract
  },
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      // add background
      backgroundImage: {
        "blueBg": "url('/blue-background.png')",
        "whiteBg": "url('/white-background.png')",
        "humanWithoutArrows": "url('/human-with-laptop-without-arrows.png')",
      },
      screens: {
        xs: '20rem'
      }
    },
  },
  plugins: [
    fluid
  ]
} satisfies Config;
