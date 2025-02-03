// PillBtn.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import PillBtn from '../components/PillBtn';
import { icons } from '../components/IconTypes';

const meta: Meta<typeof PillBtn> = {
	title: 'Buttons/PillBtn',
	component: PillBtn,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['s', 'm', 'l'],
			description: '버튼 크기 선택',
			defaultValue: 'm',
		},
		showLeftIcon: {
			control: 'boolean',
			description: '좌측 아이콘 on/off',
		},
		leftIcon: {
			control: {
				type: 'select',
				options: Object.keys(icons),
			},
			description: '좌측 아이콘 선택',
			if: { arg: 'showLeftIcon' },
		},
		showRightIcon: {
			control: 'boolean',
			description: '우측 아이콘 on/off',
		},
		rightIcon: {
			control: {
				type: 'select',
				options: Object.keys(icons),
			},
			description: '우측 아이콘 선택',
			if: { arg: 'showRightIcon' },
		},
	},
} satisfies Meta<typeof PillBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'm',
		showLeftIcon: false,
		leftIcon: undefined,
		showRightIcon: false,
		rightIcon: undefined,
	},
};
