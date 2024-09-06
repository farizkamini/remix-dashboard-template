import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			body: ["Inter"],
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
