import { Meta, StoryObj } from "@storybook/react";
import ListRadio, { ListRadioProps } from "@components/radio/ListRadio";

export default {
	title: "Radio/ListRadio",
	component: ListRadio,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: { control: "radio", options: ["S", "M"], description: "사이즈" },
		title: { control: "text", description: "Title 텍스트" },
		isSubText: {
			control: "boolean",
			description: "subText 표시 여부",
			table: { disable: false },
			if: { arg: "size", eq: "M" },
		},
		subText: {
			control: "text",
			description: "설명 텍스트",
			if: { arg: "isSubText", truthy: true, and: { arg: "size", eq: "M" } },
		},

		isSelected: {
			control: "boolean",
			description: "selected",
		},
	},
} as Meta<ListRadioProps>;

type Story = StoryObj<ListRadioProps>;

export const MoveInfo: Story = {
	args: {
		size: "M",
		title: "최적 경로순",
		isSubText: false,
		subText:
			"소요 시간 및 운행 정보, 환승 횟수 등을 종합적으로 고려한 경로 순서입니다.",

		isSelected: false,
	},
	parameters: {
		exclude: ["isSelected"],
		backgrounds: {
			default: "dark", // 백그라운드 추가
		},
	},
};
