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
    icon: {
      control: { type: 'select' },
      options: iconNames,
      description: '우측 아이콘 선택 드롭다운',
    },
    text: {
      control: false, // Controls 패널에서 비활성화
      description: '변경 불가',
    },
  },
} satisfies Meta<typeof ControlBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MoveInfo: Story = {
  args: {
    text: '버스 도착정보 더보기', // 고정된 텍스트
    icon: undefined,
  },
};
