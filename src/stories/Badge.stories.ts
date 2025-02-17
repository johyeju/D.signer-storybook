import { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';

const meta: Meta<typeof Badge> = {
	title: 'Content/Badge',
	component: Badge,
	argTypes: {
		type: {
			control: {
				type: 'radio',
				options: ['Artery', 'WideArea', 'Default'],
			},
		},
		text: {
			control: 'text',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BusNum: Story = {
	args: {
		type: 'Default',
		text: '1234',
	},
	argTypes: {
		type: {
			control: 'radio',
			options: ['Artery', 'WideArea', 'Default'],
		},
	},
};
