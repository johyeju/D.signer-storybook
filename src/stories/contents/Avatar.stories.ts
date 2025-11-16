import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "@components/avatar/Avatar";

const meta: Meta<typeof Avatar> = {
	title: "Content/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			control: "radio",
			options: ["S", "L"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	args: {
		size: "L",
	},
};
