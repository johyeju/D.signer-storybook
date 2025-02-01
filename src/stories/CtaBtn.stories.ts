import type { Meta, StoryObj } from '@storybook/react';
import CtaBtn from '../components/CtaBtn';

const meta: Meta<typeof CtaBtn> = {
	title: 'CTA/CtaBtn',
	component: CtaBtn,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		leftButtonText: { control: 'text', defaultValue: '지금 출발' },
		rightButtonText: { control: 'text', defaultValue: '완료' },
	},
};

export default meta;

type Story = StoryObj<typeof CtaBtn>;

export const Default: Story = {
	args: {
		leftButtonText: '지금 출발',
		rightButtonText: '완료',
	},
};
