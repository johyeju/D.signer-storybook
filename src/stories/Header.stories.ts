import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';
import { icons } from '../components/IconTypes';

const meta = {
	title: 'Header/Header1',
	component: Header,
	parameters: {
		layout: 'center',
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description: '헤더 제목',
			defaultValue: 'Title',
		},
		showLeftIcon: {
			control: 'boolean',
			description: '좌측 아이콘 on/off',
			defaultValue: true, // 기본적으로 on 상태
		},
		leftIcon: {
			control: {
				type: 'select',
				options: Object.keys(icons),
			},
			description: '좌측 아이콘 선택 (on 상태일 때만 적용)',
			if: { arg: 'showLeftIcon' }, // showLeftIcon이 true일 때만 노출
		},
		rightIcon: {
			control: {
				type: 'select',
				options: Object.keys(icons),
			},
			description: '우측 아이콘 선택',
			defaultValue: 'close',
		},
	},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Title',
		showLeftIcon: true,
		leftIcon: 'close',
		rightIcon: 'close',
	},
};
