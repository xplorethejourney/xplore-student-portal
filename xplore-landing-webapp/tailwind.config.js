import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(
    {
      "themes": {
        "light": {
          "colors": {
            "background": "#F5EEFF",
            "foreground": "#1D1049",
            "primary": {
              "100": "#E1E1FC",
              "200": "#C4C5FA",
              "300": "#A3A4F2",
              "400": "#8889E5",
              "500": "#6263D5",
              "600": "#4748B7",
              "700": "#313299",
              "800": "#1F1F7B",
              "900": "#121366",
              "DEFAULT": "#6263D5",
              "foreground": "#ffffff"
            },
            "secondary": {
              "100": "#FFF8D7",
              "200": "#FFF0B0",
              "300": "#FFE588",
              "400": "#FFDB6B",
              "500": "#FFCA3A",
              "600": "#DBA62A",
              "700": "#B7851D",
              "800": "#936612",
              "900": "#7A500B",
              "DEFAULT": "#FFCA3A",
              "foreground": "#000000"
            },
            "success": {
              "100": "#F1FCD0",
              "200": "#E1F9A2",
              "300": "#C6ED71",
              "400": "#A8DC4C",
              "500": "#81C619",
              "600": "#67AA12",
              "700": "#508E0C",
              "800": "#3B7207",
              "900": "#2C5F04",
              "DEFAULT": "#81C619",
              "foreground": "#ffffff"
            },
            "info": {
              "100": "#CCF7FF",
              "200": "#99EAFF",
              "300": "#66D6FF",
              "400": "#3FC0FF",
              "500": "#009DFF",
              "600": "#0079DB",
              "700": "#005AB7",
              "800": "#004093",
              "900": "#002D7A",
              "DEFAULT": "#009DFF",
              "foreground": "#ffffff"
            },
            "warning": {
              "100": "#FFF8D7",
              "200": "#FFF0B0",
              "300": "#FFE588",
              "400": "#FFDB6B",
              "500": "#FFCA3A",
              "600": "#DBA62A",
              "700": "#B7851D",
              "800": "#936612",
              "900": "#7A500B",
              "DEFAULT": "#FFCA3A",
              "foreground": "#000000"
            },
            "danger": {
              "100": "#FFE4D8",
              "200": "#FFC2B1",
              "300": "#FF998A",
              "400": "#FF736D",
              "500": "#FF3D46",
              "600": "#DB2C44",
              "700": "#B71E41",
              "800": "#93133B",
              "900": "#7A0B38",
              "DEFAULT": "#FF3D46",
              "foreground": "#ffffff"
            },
            "focus": "#6263D5"
          },
          "layout": {
            "disabledOpacity": "0.3",
            "radius": {
              "small": "4px",
              "medium": "6px",
              "large": "8px"
            },
            "borderWidth": {
              "small": "1px",
              "medium": "2px",
              "large": "3px"
            }
          }
        },
        "dark": {
          "colors": {
            "background": "#121212",
            "foreground": "#ffffff",
            "primary": {
              "100": "#E1E1FC",
              "200": "#C4C5FA",
              "300": "#A3A4F2",
              "400": "#8889E5",
              "500": "#6263D5",
              "600": "#4748B7",
              "700": "#313299",
              "800": "#1F1F7B",
              "900": "#121366",
              "DEFAULT": "#6263D5",
              "foreground": "#ffffff"
            },
            "secondary": {
              "100": "#FFF8D7",
              "200": "#FFF0B0",
              "300": "#FFE588",
              "400": "#FFDB6B",
              "500": "#FFCA3A",
              "600": "#DBA62A",
              "700": "#B7851D",
              "800": "#936612",
              "900": "#7A500B",
              "DEFAULT": "#FFCA3A",
              "foreground": "#000000"
            },
            "success": {
              "100": "#F1FCD0",
              "200": "#E1F9A2",
              "300": "#C6ED71",
              "400": "#A8DC4C",
              "500": "#81C619",
              "600": "#67AA12",
              "700": "#508E0C",
              "800": "#3B7207",
              "900": "#2C5F04",
              "DEFAULT": "#81C619",
              "foreground": "#ffffff"
            },
            "info": {
              "100": "#CCF7FF",
              "200": "#99EAFF",
              "300": "#66D6FF",
              "400": "#3FC0FF",
              "500": "#009DFF",
              "600": "#0079DB",
              "700": "#005AB7",
              "800": "#004093",
              "900": "#002D7A",
              "DEFAULT": "#009DFF",
              "foreground": "#ffffff"
            },
            "warning": {
              "100": "#FFF8D7",
              "200": "#FFF0B0",
              "300": "#FFE588",
              "400": "#FFDB6B",
              "500": "#FFCA3A",
              "600": "#DBA62A",
              "700": "#B7851D",
              "800": "#936612",
              "900": "#7A500B",
              "DEFAULT": "#FFCA3A",
              "foreground": "#000000"
            },
            "danger": {
              "100": "#FFE4D8",
              "200": "#FFC2B1",
              "300": "#FF998A",
              "400": "#FF736D",
              "500": "#FF3D46",
              "600": "#DB2C44",
              "700": "#B71E41",
              "800": "#93133B",
              "900": "#7A0B38",
              "DEFAULT": "#FF3D46",
              "foreground": "#ffffff"
            },
            "focus": "#6263D5"
          },
          "layout": {
            "disabledOpacity": "0.3",
            "radius": {
              "small": "4px",
              "medium": "6px",
              "large": "8px"
            },
            "borderWidth": {
              "small": "1px",
              "medium": "2px",
              "large": "3px"
            }
          }
        }
      }
    }
    

  )],
}
