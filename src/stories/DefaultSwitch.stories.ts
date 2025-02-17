import { Meta, StoryObj } from '@storybook/react';
import DefaultSwitch from '../components/DefaultSwitch';

const meta: Meta<typeof DefaultSwitch> = {
	title: 'Switch/DefaultSwitch',
	component: DefaultSwitch,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		checked: { control: 'boolean' },
		text: { control: 'text' },
	},
};

export default meta;

type Story = StoryObj<typeof DefaultSwitch>;

export const Default: Story = {
	args: {
		checked: false,
		text: 'ON',
	},
	parameters: {
		controls: {
			exclude: ['text'],
		},
	},
};
