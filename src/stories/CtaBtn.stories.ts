import type { Meta, StoryObj } from '@storybook/react';
import CtaBtn from '../components/CtaBtn';

type CtaBtnProps = React.ComponentProps<typeof CtaBtn>;

export default {
	title: 'CTA/CtaBtn',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	component: CtaBtn,
	argTypes: {
		leftButtonVisible: { control: 'boolean' },
		leftButtonText: { control: 'text', if: { arg: 'leftButtonVisible' } },
		rightButtonText: { control: 'text' },
	},
} as Meta<typeof CtaBtn>;

export const Default: StoryObj<CtaBtnProps> = {
	args: {
		leftButtonVisible: true,
		leftButtonText: '왼쪽',
		rightButtonText: '오른쪽',
	},
};
