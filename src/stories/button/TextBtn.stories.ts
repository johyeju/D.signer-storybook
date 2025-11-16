import { Meta, StoryObj } from "@storybook/react";
import TextBtn from "@/components/buttons/text-button/TextBtn";
import "@components/buttons/text-button/TextBtn.css";

const meta: Meta<typeof TextBtn> = {
	title: "Buttons/TextBtn",
	component: TextBtn,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		text: { control: "text" },
	},
};

export default meta;

type Story = StoryObj<typeof TextBtn>;

export const Default: Story = {
	args: {
		text: "content",
		className: "default-style", //style
	},
	argTypes: { className: { control: false } },
};

export const Modal: Story = {
	args: {
		text: "content",
		state: "Default",
		type: "Primary",
		className: "modal-style", //style
	},
	argTypes: {
		state: {
			control: "radio",
			options: ["Default", "Disabled"],
		},
		type: {
			control: "select",
			options: ["Primary", "Secondary"],
			if: { arg: "state", eq: "Default" }, // 'Default' 상태일 때만 표시
		},
		className: { control: false },
	},
};
