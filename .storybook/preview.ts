import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#ffffff" },
				{ name: "dark", value: "#DADADA" },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},

	tags: ["autodocs"],
};

export default preview;
