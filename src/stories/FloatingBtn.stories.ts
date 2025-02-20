import type { Meta, StoryObj } from '@storybook/react';
import FloatingBtn from '../components/FloatingBtn';
import { TransTypes } from '../components/IconTransport';

const meta: Meta<typeof FloatingBtn> = {
  title: 'Buttons/FloatingBtn',
  component: FloatingBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: {
        type: 'number',
      },
      if: { arg: 'size', eq: 50 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FloatingBtn>;

export const Default: Story = {
  args: {
    size: 50,
    icon: undefined, // 아이콘 초기값
    className: 'default-style',
    label: '33', // 초기 숫자값
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: [40, 44, 50],
    },
    label: {
      control: { type: 'number', min: 0, max: 99 }, // 숫자 입력 가능
      if: { arg: 'size', eq: 50 },
    },
    icon: {
      control: { type: 'select' },
      options: TransTypes,
      description: '아이콘 선택 가능',
    },
  },
};

export const Translucent: Story = {
  args: {
    label: '33', // 초기 숫자값
    size: 50,
    icon: undefined, // 아이콘 초기값
    className: 'translucent-style',
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
      control: { type: 'select' },
      options: TransTypes,
      description: '아이콘 선택 가능',
    },
  },
};

export const RoundSquare: Story = {
  args: {
    label: 'text', // 문자열로 변경
    icon: undefined, // 아이콘 초기값
    size: 50,
    className: 'round-square-style',
  },
  argTypes: {
    label: {
      control: { type: 'text' }, // 텍스트 입력 가능
    },
    icon: {
      control: { type: 'select' },
      options: TransTypes,
      description: '아이콘 선택 가능',
    },
  },
};

export const Ellipse: Story = {
  args: {
    label: 'text', // 문자열로 변경
    icon: undefined, // 아이콘 초기값
    size: 50,
    className: 'ellipse-style',
  },
  argTypes: {
    label: {
      control: { type: 'text' }, // 텍스트 입력 가능
    },
    icon: {
      control: { type: 'select' },
      options: TransTypes,
      description: '아이콘 선택 가능',
    },
  },
};
