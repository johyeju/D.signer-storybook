import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextButton from '../components/TextButton';

const meta = {
  title: 'Buttons/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼의 텍스트',
      defaultValue: 'button',
    },
    isChecked: {
      control: 'boolean',
      description: '버튼 활성화 여부',
      defaultValue: false,
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'button',
    isChecked: false,
  },
};
