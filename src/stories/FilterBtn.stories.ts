import type { Meta, StoryObj } from '@storybook/react';
import Filter from '../components/FilterBtn';
import { iconNames } from '../components/IIconTypes';

const meta: Meta<typeof Filter> = {
	title: 'Buttons/FilterBtn',
	component: Filter,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['R', 'M'],
			description: '사이즈 변경 (R, M)',
			defaultValue: 'M',
		},
		text: {
			control: 'text',
			description: '필터 텍스트 수정 가능',
			defaultValue: '필터',
		},
		icon: {
			control: { type: 'select' },
			options: iconNames,
			description: '우측 아이콘 선택 드롭다운',
		},
	},
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'M',
		text: 'content',
		icon: undefined,
	},
};
