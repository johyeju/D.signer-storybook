import type { Meta, StoryObj } from '@storybook/react';
import TextBtn from '../components/TextBtn';

type TextBtnProps = React.ComponentProps<typeof TextBtn>;

export default {
	title: 'Buttons/TextBtn',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	component: TextBtn,
	argTypes: {
		text: { control: 'text' },
		color: { control: 'boolean' },
	},
} as Meta<typeof TextBtn>;

export const Default: StoryObj<TextBtnProps> = {
	args: {
		text: 'contents',
		isBlue: true,
	},
};
