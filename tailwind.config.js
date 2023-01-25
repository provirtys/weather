/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      fontSize: {
        dynamic2XL: "clamp(40px,5vw,80px)",
        dynamicXL: "clamp(18px,2.5vw,45px)",
        dynamicLG: "clamp(14px,1.5vw,22px)",
        dynamicBase: "clamp(12px,1vw,20px)",
        dynamicSM: "clamp(10px,1vw,18px)",
      },
			padding:{
				dynamicLG: "clamp(3rem,4vw,20rem);",
				dynamicBase: "clamp(10px,1vw,20px)"
			},
			screens:{
				'xsm': '480px',
				'2xsm': '0px',
			}
    },
  },
  plugins: [],
}
