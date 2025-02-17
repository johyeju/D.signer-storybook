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
		congestion: {
			control: {
				type: 'radio',
				options: ['Default', 'Usually', 'crowded', 'last'],
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
	parameters: {
		controls: {
			exclude: ['congestion'],
		},
	},
};

export const StopLocation: Story = {
	args: {
		congestion: 'Default',
		text: '1234',
	},
	argTypes: {
		congestion: {
			control: 'radio',
			options: ['Default', 'Usually', 'crowded', 'last'],
		},
	},
	parameters: {
		controls: {
			exclude: ['type'],
		},
	},
};
