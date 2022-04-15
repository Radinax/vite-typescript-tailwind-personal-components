module.exports = {
  content: ["index.html", "src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
      fontFamily: {
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsItalic: ["Poppins-Italic", "sans-serif"],
        poppins: ["Poppins-Regular", "sans-serif"],
      },
      colors: {
        primary: "#F6F4F2", // elegant gray
        secondary: "#425664", // neutral dark blue
        tertiary: "#C6AD8F", // light brown
        dark: {
          primary: "#212221", // very dark blue
          secondary: "#B4D0E7", // Emerald aquamarine like
          tertiary: "#61082B", // cute light brown
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
