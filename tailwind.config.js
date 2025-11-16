/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				body: ["Pretendard", "sans-serif"],
			},
			fontSize: {
				"title-12-regular": ["12px", { lineHeight: "auto", fontWeight: "400" }],
				"title-12-medium": ["12px", { lineHeight: "auto", fontWeight: "500" }],
				"title-12-semibold": [
					"12px",
					{ lineHeight: "auto", fontWeight: "600" },
				],

				"title-13-semibold": [
					"13px",
					{ lineHeight: "auto", fontWeight: "600" },
				],

				"title-14-regular": ["14px", { lineHeight: "auto", fontWeight: "400" }],
				"title-14-medium": ["14px", { lineHeight: "auto", fontWeight: "500" }],

				"title-16-regular": ["16px", { lineHeight: "auto", fontWeight: "400" }],
				"title-16-medium": ["16px", { lineHeight: "auto", fontWeight: "500" }],
				"title-16-semibold": [
					"16px",
					{ lineHeight: "auto", fontWeight: "600" },
				],

				"title-18-medium": ["18px", { lineHeight: "auto", fontWeight: "500" }],
				"title-18-semibold": [
					"18px",
					{ lineHeight: "auto", fontWeight: "600" },
				],

				"title-20-medium": ["20px", { lineHeight: "auto", fontWeight: "500" }],
				"title-20-semibold": [
					"20px",
					{ lineHeight: "auto", fontWeight: "600" },
				],

				// Body
				"body-13-regular-110": [
					"13px",
					{ lineHeight: "110%", fontWeight: "400" },
				],
				"body-13-regular-auto": [
					"13px",
					{ lineHeight: "auto", fontWeight: "400" },
				],

				"body-14-regular": ["14px", { lineHeight: "auto", fontWeight: "400" }],
				"body-14-semibold": ["14px", { lineHeight: "auto", fontWeight: "600" }],

				"body-15-bold": ["15px", { lineHeight: "auto", fontWeight: "700" }],

				"body-16-regular-135": [
					"16px",
					{ lineHeight: "135%", fontWeight: "400" },
				],
				"body-16-medium": ["16px", { lineHeight: "auto", fontWeight: "500" }],

				// Caption
				"caption-10-regular": [
					"10px",
					{ lineHeight: "auto", fontWeight: "400" },
				],
				"caption-12-regular": [
					"12px",
					{ lineHeight: "auto", fontWeight: "400" },
				],
				"caption-16-regular": [
					"16px",
					{ lineHeight: "auto", fontWeight: "400" },
				],
			},

			colors: {
				// Blue 컬러
				blue: {
					ic: {
						fill: { primary: "#006CFF" },
						stroke: { primary: "#006CFF", secondary: "#437BFE" },
					},
					txt: {
						fill: {
							primary: "#006CFF",
							secondary: "#437BFE",
							tertiary: "#0068C3",
							quaternary: "#1AA7B5",
						},
					},
					btn: {
						fill: { primary: "#006CFF", secondary: "#437BFE" },
						stroke: { primary: "#006CFF" },
					},
					bg: {
						fill: {
							primary: "#7EDAE0",
							secondary: "#7EDAE0",
							tertiary: "#7EDAE0",
							quaternary: "#7EDAE0",
						},
						opacity: { tertiary: "0.35", quaternary: "0.25" },
					},
				},

				// Gray 컬러
				gray: {
					ic: {
						fill: {
							white: "#FFFFFF",
							cool: { primary: "#8899AC", weak: "#CAD1DB" },
							warm: { primary: "#444447", secondary: "#656565" },
						},
						stroke: {
							cool: {
								primary: "#222225",
								secondary: "#444447",
								tertiary: "#4D5A6A",
								quaternary: "#6B7C92",
								weak: "#F0F0F3",
							},
							warm: {
								primary: "#656565",
								secondary: "#939396",
								weak: "#C5C5C7",
							},
						},
					},
					txt: {
						fill: {
							white: "#FFFFFF",
							warm: {
								primary: "#222225",
								secondary: "#373737",
								tertiary: "#656565",
								quaternary: "#939396",
								weak: "#C5C5C7",
							},
							cool: {
								primary: "#444447",
								secondary: "#4D5A6A",
								tertiary: "#6B7C92",
								quaternary: "#8899AC",
							},
						},
					},
					bg: {
						fill: {
							white: "#FFFFFF",
							warm: { primary: "#EDEDED" },
							cool: {
								primary: "#E5EAF1",
								secondary: "#F8F9FB",
								opacity: { primary: "#222225" },
							},
						},
						stroke: { weak: "#F0F4FF" },
					},
					btn: {
						stroke: {
							cool: {
								primary: "#E5EAF1",
								secondary: "#CAD1DB",
								tertiary: "#36424E",
							},
						},
						fill: {
							white: "#FFFFFF",
							cool: {
								tertiary: "#CAD1DB",
								primary: "#8899AC",
								secondary: "#3D4A57",
								quaternary: "#F5F6F9",
							},
							warm: { primary: "#C5C5C7" },
						},
					},
				},

				// Green 컬러
				green: {
					ic: { fill: { primary: "#03AA5A" } },
					txt: { fill: { primary: "#03AA5A" } },
				},

				// Orange 컬러
				orange: {
					ic: { fill: { primary: "#FDB852", secondary: "#FEB901" } },
					txt: { fill: { highlight: { primary_fill: "#F5683C" } } },
				},

				// Red 컬러
				red: {
					txt: {
						fill: {
							warning: { primary: "#F61024", secondary: "#FF4043" },
							highlight: { primary: "#F61024", secondary: "#FF4043" },
						},
					},
					ic: {
						fill: {
							warning: { primary: "#F61024", secondary: "#FF4043" },
							highlight: { primary: "#F61024", secondary: "#FF4043" },
						},
					},
					btn: {
						stroke: {
							warning: { primary: "#FF4043" },
							highlight: { primary: "#F61024", secondary: "#FF4043" },
						},
					},
				},
			},
		},
	},
	plugins: [],
};
