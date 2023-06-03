/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      mogra: ["Mogra"],
      lato: ["Lato"],
    },
    screens: {
      xs: "478px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      translate3d: {
        0: "0, 0, 0",
        1: "0, 0, 50px",
        2: "0, 0, 100px",
        // Tambahkan nilai lainnya sesuai kebutuhan Anda
      },
    },
  },
  plugins: [require("tailwindcss-transform")(["responsive"])],
};
