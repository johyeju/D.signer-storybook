import type { Meta, StoryObj } from '@storybook/react';
import StreetThumb from '../components/StreetThumb';
import '../components/StreetThumb.css';

const meta: Meta<typeof StreetThumb> = {
  title: 'Buttons/StreetThumb',
  component: StreetThumb,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bottomText: {
      control: 'boolean',
      description: '하단 텍스트 표시 여부',
      defaultValue: false,
    },
    direction: {
      control: 'text',
      description: '도로의 방향',
      defaultValue: '왼쪽',
      if: { arg: 'bottomText' }, // bottomText가 true일 때만 표시
    },
    type: {
      control: { type: 'radio' },
      options: ['L', 'R'],
      description: 'size',
      defaultValue: 'L',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bottomText: false,
    direction: '왼쪽',
    type: 'L',
  },
};
