import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from "@components/time-picker/TimePicker";

const meta: Meta<typeof TimePicker> = {
	title: "TimePicker/TimePicker",
	component: TimePicker,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof TimePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
