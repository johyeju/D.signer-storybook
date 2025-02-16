import { Meta, StoryObj } from '@storybook/react';
import DropDown, { DropDownProps } from '../components/DropDown';

export default {
	title: 'DropDown/DropDown',
	component: DropDown,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		state: { control: 'boolean', description: '드롭다운 활성화 여부' },
	},
} as Meta<DropDownProps>;

type Story = StoryObj<DropDownProps>;

export const Default: Story = {
	args: {
		state: false,
	},
};
