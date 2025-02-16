import type { Meta, StoryObj } from '@storybook/react';
import Pagination, { PaginationProps } from '../components/Pagination';

const meta: Meta<typeof Pagination> = {
	title: 'Pagination/Pagination',
	component: Pagination,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		startNum: {
			control: { type: 'number', min: 1 },
			description: '현재 페이지 번호',
			defaultValue: 1,
		},
		finalNum: {
			control: { type: 'number', min: 1 },
			description: '전체 페이지 수',
			defaultValue: 3,
		},
	},
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
	args: {
		startNum: 1,
		finalNum: 3,
	},
};
