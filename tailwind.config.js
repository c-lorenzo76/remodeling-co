const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
        keyframes: {
            "caret-blink": {
                "0%,70%,100%": { opacity: "1" },
                "20%,50%": { opacity: "0" },
            },
            scroll: {
                to: {
                    transform: "translate(calc(-50% - 0.5rem))",
                },
            },
        },
        animation: {
            "caret-blink": "caret-blink 1.25s ease-out infinite",
            "scroll":
                "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        },
        fontFamily: {
            'afacad': ['Afacad Flux', 'sans-serif'],
        },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}