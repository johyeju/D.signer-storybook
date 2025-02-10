import { Meta, StoryObj } from '@storybook/react';
import ControlBtn from '../components/ControlBtn';
import { iconNames } from '../components/IIconTypes';

const meta: Meta<typeof ControlBtn> = {
  title: 'Buttons/ControlBtn',
  component: ControlBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: '텍스트 수정 가능',
      defaultValue: 'content',
    },
    icon: {
      control: { type: 'select' },
      options: iconNames,
      description: '우측 아이콘 선택 드롭다운',
    },
  },
} satisfies Meta<typeof ControlBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MoveInfo: Story = {
  args: {
    text: 'content',
    icon: undefined,
  },
};
