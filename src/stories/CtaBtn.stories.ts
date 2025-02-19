import type { Meta, StoryObj } from '@storybook/react';
import CtaBtn from '../components/CtaBtn';
import { iconNames } from '../components/IIconTypes';
import '../components/CtaBtn.css';

const meta: Meta<typeof CtaBtn> = {
  title: 'Buttons/CtaBtn',
  component: CtaBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: '버튼 텍스트 수정 가능',
      defaultValue: 'CTA 버튼',
    },
    size: {
      control: { type: 'radio' },
      options: ['S', 'M', 'R'],
      description: '버튼 사이즈 선택',
      defaultValue: 'M',
    },
    type: {
      control: { type: 'radio' },
      options: ['Primary', 'Secondary', 'Tertiary'], // 전체 옵션 제공
      description: '버튼 타입 선택',
    },
    icon: {
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 선택 드롭다운',
      if: { arg: 'size', neq: 'S' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Ellipse: Story = {
  args: {
    label: 'content',
    size: 'M',
    type: 'Primary',
    icon: 'call',
  },
};

export const RoundSquare: Story = {
  args: {
    label: 'content',
    type: 'Primary',
    icon: 'call',
  },
  parameters: {
    controls: {
      exclude: ['size'], // 패널 숨김
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Primary', 'Tertiary'],
    },
  },
};
