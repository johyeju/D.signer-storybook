import type { Meta, StoryObj } from "@storybook/react";
import { iconNames } from "@components/icon/IconTypes";
import Filter from "@/components/buttons/filter-button/FilterBtn";

const meta: Meta<typeof Filter> = {
	title: "Buttons/FilterBtn",
	component: Filter,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			control: { type: "radio" },
			options: ["R", "M"],
			description: "사이즈 변경 (R, M)",
			defaultValue: "M",
			table: {
				disable: true,
			},
		},
		text: {
			control: "text",
			description: "필터 텍스트 수정 가능",
			defaultValue: "필터",
			if: { arg: "type", neq: "selected" },
		},
		icon: {
			control: { type: "select" },
			options: iconNames,
			description: "우측 아이콘 선택 드롭다운",
		},
		type: {
			control: { type: "radio" },
			options: ["default", "selected"],
			description: "Type 선택 (default 또는 selected)",
			defaultValue: "default",
		},
		date: {
			control: { type: "radio" },
			options: ["오늘", "내일", "NN월 NN일"],
			description: "날짜 선택 (Selected 타입일 때만 표시)",
			if: { arg: "type", eq: "selected" },
		},
		amPm: {
			control: { type: "radio" },
			options: ["오전", "오후"],
			description: "오전/오후 선택 (Selected 타입일 때만 표시)",
			if: { arg: "type", eq: "selected" },
		},
		num: {
			control: { type: "number" },
			description: "시간 입력 (01:00 ~ 12:59, Selected 타입일 때만 표시)",
			min: 100, // 최소 01:00
			max: 1259, // 최대 12:59
			if: { arg: "type", eq: "selected" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "M",
		text: "최적경로순",
		icon: "right_arrow",
		type: "default",
	},
};

export const Time: Story = {
	args: {
		text: "출발 시간 설정",
		icon: "right_arrow",
		type: "selected",
		date: "오늘",
		amPm: "오전",
		num: 100, // 초기값 01:00
	},
	parameters: {
		controls: {
			exclude: ["size"],
		},
	},
};
