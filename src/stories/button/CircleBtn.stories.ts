import type { Meta, StoryObj } from "@storybook/react";
import CircleBtn from "@components/buttons/circle-button/CircleBtn";
import { iconNames } from "@components/icon/IconTypes";

const meta: Meta<typeof CircleBtn> = {
	title: "Buttons/CircleBtn",
	component: CircleBtn,
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof CircleBtn>;

export const Default: Story = {
	args: {
		size: 24,
		icon: "edit",
		disabled: false,
	},
	argTypes: {
		size: {
			control: { type: "radio" },
			options: [24, 30, 36],
		},
		icon: {
			control: { type: "select" },
			options: iconNames,
			description: "아이콘 선택 가능",
		},
	},
	parameters: {
		controls: {
			exclude: ["disabled"], //패널 제거
		},
	},
};
