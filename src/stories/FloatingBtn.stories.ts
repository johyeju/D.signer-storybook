import type { Meta, StoryObj } from '@storybook/react';
import FloatingBtn from '../components/FloatingBtn';
import { iconNames } from '../components/IIconTypes'; // 아이콘 목록 추가

const meta: Meta<typeof FloatingBtn> = {
  title: 'Buttons/FloatingBtn',
  component: FloatingBtn,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof FloatingBtn>;

export const Default: Story = {
  args: {
    label: '33', // 초기 숫자값
    size: 40,
    backgroundColor: '#FFFFFF', // 초기 배경색
    icon: undefined, // 아이콘 초기값
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [40, 44, 50],
    },
    label: {
      control: { type: 'number', min: 0, max: 99 }, // 숫자 입력 가능
    },
    backgroundColor: {
      // 배경색 선택 라디오
      control: { type: 'radio' },
      options: ['#FFFFFF', '#3D4A57'],
      labels: {
        '#FFFFFF': 'White',
        '#3D4A57': 'Dark Gray',
      },
    },
    icon: {
      // 아이콘 드롭다운 추가
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 선택 가능',
    },
  },
};

export const Translucent: Story = {
  args: {
    label: '33', // 초기 숫자값
    size: 44,
    icon: undefined, // 아이콘 초기값
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [44, 50],
    },
    label: {
      control: { type: 'number', min: 0, max: 99 }, // 숫자 입력 가능
    },
    icon: {
      // 아이콘 드롭다운 추가
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 선택 가능',
    },
  },
};

export const RoundSquare: Story = {
  args: {
    label: 'text', // 문자열로 변경
    icon: undefined, // 아이콘 초기값
  },
  argTypes: {
    label: {
      control: { type: 'text' }, // 텍스트 입력 가능
    },
    icon: {
      // 아이콘 드롭다운 추가
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 선택 가능',
    },
  },
};

export const Ellipse: Story = {
  args: {
    label: 'text', // 문자열로 변경
    icon: undefined, // ✅ 아이콘 초기값
  },
  argTypes: {
    label: {
      control: { type: 'text' }, // 텍스트 입력 가능
    },
    icon: {
      // ✅ 아이콘 드롭다운 추가
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 선택 가능',
    },
  },
};
