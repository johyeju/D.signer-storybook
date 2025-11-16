import type { Meta, StoryObj } from "@storybook/react";
import PhotoBadge from "@components/badge/PhotoBadge";
import { iconVariable, iconNames } from "@components/icon/IconTypes";

const meta: Meta<typeof PhotoBadge> = {
	title: "Buttons/PhotoBadge",
	component: PhotoBadge,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		icon: {
			control: { type: "select" },
			options: iconNames,
			description: "아이콘 선택 드롭다운",
		},
		count: {
			control: { type: "number" },
			description: "표시할 숫자 입력",
		},
	},
};

export default meta;

type Story = StoryObj<typeof PhotoBadge>;

export const Default: Story = {
	args: {
		icon: Object.keys(iconVariable)[0] as keyof typeof iconVariable,
		count: 333,
	},
};
