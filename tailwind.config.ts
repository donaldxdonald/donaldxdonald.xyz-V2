import { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        theme: '#7d4bde',
      },
      fontFamily: {
        serif: ["var(--font-serif)", "system-ui", "sans-serif"],
        display: ["var(--font-jost)", "var(--font-sans)", "system-ui", "sans-serif"],
        default: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: '0',
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: '0.6',
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: '0',
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: '0.6',
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: '0', transform: "translateY(6px)" },
          "100%": { opacity: '1', transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: '0', transform: "translateY(-6px)" },
          "100%": { opacity: '1', transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

export default config
