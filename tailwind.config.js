/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "0px 0px 10px 0px #00000040",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0.3deg, rgba(0, 0, 0, 0.5) 23.93%, rgba(0, 0, 0, 0) 52.33%)",
      },
      height: {
        "custom-vh": "calc(100vh - 90px)",
      },
    },
  },
  plugins: [],
};
