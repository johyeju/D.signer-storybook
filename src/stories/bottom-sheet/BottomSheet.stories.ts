import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "@components/bottom-sheet/BottomSheet";

const MetaConfig: Meta<typeof BottomSheet> = {
	title: "BottomSheet/BottomSheet",
	component: BottomSheet,
	parameters: {
		layout: "fullscreen",
	},
	argTypes: {
		title: { control: "text" },
		subtitle: { control: "text" },
		address: { control: "text" },
		review: { control: { type: "number", min: 0 } },
		score: { control: { type: "number", min: 0, max: 5, step: 0.1 } },
		distance: { control: { type: "number", min: 0, step: 0.1 } },
	},
};

export default MetaConfig;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
	args: {
		title: "국제시장",
		subtitle: "시장",
		address: "부산 중구",
		review: 292,
		score: 4.28,
		distance: 3.2,
	},
};
