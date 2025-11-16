import { Meta, StoryObj } from "@storybook/react";
import { HeaderNames } from "@components/bottom-sheet/header/BottomHeader";
import BottomSheetHeader from "@components/bottom-sheet/header/BottomSheetHeader";

const meta: Meta<typeof BottomSheetHeader> = {
	title: "BottomSheet/BottomSheetHeader",
	component: BottomSheetHeader,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: {
			control: "radio",
			options: HeaderNames,
			defaultValue: "default",
		},
	},
};

export default meta;
type Story = StoryObj<typeof BottomSheetHeader>;

/**
 * `default` 타입 스토리
 */
export const Default: Story = {
	args: {
		type: "default",
	},
	parameters: {
		backgrounds: {
			default: "dark", //백그라운드 추가
		},
	},
};

/**
 * `gradient` 타입 스토리
 */
export const Gradient: Story = {
	args: {
		type: "gradient",
	},
	parameters: {
		backgrounds: {
			default: "dark", //백그라운드 추가
		},
	},
};

/**
 * `badge` 타입 스토리
 */
export const Badge: Story = {
	args: {
		type: "badge",
	},
	parameters: {
		backgrounds: {
			default: "dark", //백그라운드 추가
		},
	},
};
