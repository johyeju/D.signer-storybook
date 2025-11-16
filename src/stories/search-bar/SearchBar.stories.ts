import type { Meta, StoryObj } from "@storybook/react";
import Header from "@components/search-bar/SearchBar";
import { iconNames } from "@components/icon/IconTypes";
import "@components/search-bar/SearchBar.css";

const meta = {
	title: "SearchBar/SearchBar",
	component: Header,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: "text",
			description: "헤더 제목",
			defaultValue: "Title",
		},
		showLeftIcon: {
			control: "boolean",
			description: "좌측 아이콘 on/off",
			defaultValue: true,
		},
		leftIcon: {
			control: { type: "select" },
			options: iconNames,
			description: "좌측 아이콘 선택",
			if: { arg: "showLeftIcon" },
		},
		showRightIcon: {
			control: "boolean",
			description: "우측 아이콘 on/off",
			defaultValue: true,
		},
		rightIcon: {
			control: { type: "select" },
			options: iconNames,
			description: "우측 아이콘 선택",
			if: { arg: "showRightIcon" },
			defaultValue: "close",
		},
		circleBtn: {
			control: "boolean",
			description: "CircleBtn 사용 여부",
			defaultValue: false,
		},
		circleBtnIcon: {
			control: { type: "select" },
			options: iconNames,
			description: "CircleBtn 아이콘 선택",
			if: { arg: "circleBtn" }, // circleBtn이 true일 때만 활성화
		},
	},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Title",
		showLeftIcon: true,
		leftIcon: "call",
		showRightIcon: true,
		rightIcon: "call",
		className: "default-style",
	},
	parameters: {
		controls: {
			exclude: ["showLeftIcon", "showRightIcon", "className", "circleBtn"], // 패널 숨김
		},
	},
};

export const LeadOnly: Story = {
	args: {
		title: "Title",
		showLeftIcon: false,
		circleBtn: true, // CircleBtn 불러오기
		circleBtnIcon: "call",
		className: "lead-only-style",
	},
	parameters: {
		controls: {
			exclude: [
				"leftIcon",
				"showLeftIcon",
				"showRightIcon",
				"rightIcon",
				"className",
			],
		},
	},
};

export const Edit: Story = {
	args: {
		title: "Title",
		showLeftIcon: true,
		leftIcon: "call",
		showRightIcon: true,
		rightIcon: "call",
		className: "edit-style",
	},
	parameters: {
		controls: {
			exclude: ["showLeftIcon", "showRightIcon", "className", "circleBtn"], // 패널 숨김
		},
	},
};
