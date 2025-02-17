import type { Meta, StoryObj } from '@storybook/react';
import TabAtom from '../components/TabAtom';
import { icons } from '../components/IIconTypes';

const meta: Meta<typeof TabAtom> = {
	title: 'Tab/TabAtom',
	component: TabAtom,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		text: {
			control: 'text',
			description: '텍스트',
			defaultValue: 'Content',
		},
		selected: {
			control: 'boolean',
			description: '활성화 여부',
			defaultValue: false,
		},
		showIcon: {
			control: 'boolean',
			description: '아이콘 표시 여부',
		},
		Icon: {
			control: { type: 'select' },
			options: Object.keys(icons),
			description: '아이콘 선택',
			if: { arg: 'showIcon', truthy: true }, //조건 로직
		},
		num: {
			control: { type: 'number' },
			description: '숫자 표시 (예: 알림 개수)',
		},
		className: {
			control: 'text',
			description: '추가적인 CSS 클래스',
		},
	},
} satisfies Meta<typeof TabAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabA: Story = {
	args: {
		text: '홈',
		selected: false,
		showIcon: false,
		Icon: undefined,
		className: '',
	},
	parameters: {
		controls: {
			exclude: ['num', 'className', 'showIcon'],
		},
	},
};

export const TabB: Story = {
	args: {
		text: '홈',
		num: 12,
		selected: false,
		showIcon: false,
		Icon: undefined,
		className: '',
	},
	parameters: {
		controls: {
			exclude: ['className', 'showIcon'],
		},
	},
};

export const TabC: Story = {
	args: {
		text: '홈',
		selected: false,
		showIcon: false,
		Icon: undefined,
		className: '',
	},
	parameters: {
		controls: {
			exclude: ['num', 'className', 'showIcon'],
		},
	},
};

export const TabE: Story = {
	args: {
		text: '분',
		selected: false,
		showIcon: true,
		Icon: 'call',
		className: '',
	},
	parameters: {
		controls: {
			exclude: ['num', 'className', 'showIcon', 'text'],
		},
	},
};

export const TabF: Story = {
	args: {
		text: 'content 필버튼스타일임',
		selected: false,
		showIcon: false,
		Icon: undefined,
		className: '',
	},
	parameters: {
		controls: {
			exclude: ['num', 'className', 'showIcon'],
		},
	},
};

export const TabG: Story = {
	args: {
		text: 'content',
		selected: false,
		showIcon: true,
		Icon: 'call',
		className: '',
	},
	parameters: {
		controls: {
			exclude: ['num', 'className', 'showIcon'],
		},
	},
};
