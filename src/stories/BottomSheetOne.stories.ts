import { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '../components/BottomSheetOne';

const meta: Meta<typeof BottomSheet> = {
  title: 'BottomSheet/BottomSheetOne',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: '국제시장',
    },
    subtitle: {
      control: 'text',
      defaultValue: '시장',
    },
    address: {
      control: 'text',
      defaultValue: '부산 중구',
    },
    review: {
      control: 'number',
      defaultValue: 292,
    },
    score: {
      control: 'number',
      defaultValue: 4.28,
    },
    distance: {
      control: 'number',
      defaultValue: 3.2,
    },
  },
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  args: {
    title: '국제시장',
    subtitle: '시장',
    address: '부산 중구',
    review: 292,
    score: 4.28,
    distance: 3.2,
  },
  parameters: {
    controls: {
      exclude: [],
    },
  },
};
