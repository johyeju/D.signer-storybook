import { Meta, StoryObj } from '@storybook/react';
import DropDown, { DropDownProps } from '../components/DropDown';

export default {
	title: 'DropDown/DropDown',
	component: DropDown,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		state: { control: 'boolean', description: '드롭다운 활성화 여부' },
		item1: { control: 'text', description: '첫 번째 값' },
		item2: { control: 'text', description: '두 번째 값' },
		item3: { control: 'text', description: '세 번째 값' },
	},
} as Meta<DropDownProps>;

type Story = StoryObj<DropDownProps>;

export const Default: Story = {
	args: {
		state: false,
		item1: '3',
		item2: '6',
		item3: '9',
	},
};
