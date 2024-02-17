import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        nice: "69ch",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      colors: {
        brand: {
          DEFAULT: "#3867D6",
          950: "#060A15",
          900: "#0B152B",
          800: "#162956",
          700: "#223E80",
          600: "#2D52AB",
          500: "#3867D6",
          400: "#6085DE",
          300: "#88A4E6",
          200: "#AFC2EF",
          100: "#D7E1F7",
          50: "#EBF0FB",
        },
      },
      lineHeight: {
        relaxed: "1.75",
      },
      saturate: {
        125: "1.25",
      },
      dropShadow: {
        doodle: [
          "-0.1875rem -0.1875rem 0.125rem var(--tw-shadow-color)",
          "0.1875rem 0.1875rem 0.125rem var(--tw-shadow-color)",
          "0.1875rem -0.1875rem 0.125rem var(--tw-shadow-color)",
          "-0.1875rem 0.1875rem 0.125rem var(--tw-shadow-color)",
        ],
      },
      boxShadow: {
        "toolbar-hover": "0 0 8px 2px var(--tw-shadow-color)",
        "toolbar-elevated": "0 0 6px 1px var(--tw-shadow-color)",
      },
      textShadow: {
        none: "none",
        DEFAULT: "0 0.0625rem 0.125rem var(--tw-shadow-color)",
      },
      ringWidth: {
        0: "0rem",
        1: "0.0625rem",
        2: "0.125rem",
        DEFAULT: "0.1875rem",
      },
      textDecorationThickness: {
        0: "0rem",
        1: "0.0625rem",
        2: "0.125rem",
        DEFAULT: "0.1875rem",
      },
      textUnderlineOffset: {
        0: "0rem",
        1: "0.0625rem",
        2: "0.125rem",
        DEFAULT: "0.1875rem",
      },
      transitionDuration: {
        "50": "50ms",
        "250": "250ms",
      },
      transitionDelay: {
        "50": "50ms",
        "250": "250ms",
      },
      transitionTimingFunction: {
        in: "ease-in",
        out: "ease-out",
        "in-out": "ease-in-out",
        DEFAULT: "ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "var(--end-opacity, 1)" },
        },
        scroll: {
          "0%": { transform: "translate3d(1.5rem, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
        wave: {
          "from, 50%, to": { transform: "rotate(0deg)" },
          "10%, 30%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "40%": { transform: "rotate(9deg)" },
        },
        "music-bars": {
          "10%": {
            transform: "scaleY(0.3)",
          },
          "30%": {
            transform: "scaleY(1)",
          },
          "60%": {
            transform: "scaleY(0.5)",
          },
          "80%": {
            transform: "scaleY(0.75)",
          },
          "100%": {
            transform: "scaleY(0.6)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-in-out 50ms both",
        scroll: "scroll 15s linear infinite",
        wave: "wave 2.5s infinite",
        "music-bars": "music-bars 2.2s ease infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
