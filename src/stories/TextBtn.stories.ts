import { Meta, StoryObj } from '@storybook/react';
import TextBtn from '../components/TextBtn';

const meta: Meta<typeof TextBtn> = {
  title: 'Buttons/TextBtn',
  component: TextBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof TextBtn>;

export const Default: Story = {
  args: {
    text: 'content',
  },
};

export const Modal: Story = {
  args: {
    text: 'content',
    state: 'Default',
    type: 'Primary',
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['Default', 'Disabled'],
    },
    type: {
      control: 'select',
      options: ['Primary', 'Secondary'],
      if: { arg: 'state', eq: 'Default' }, // 'Default' 상태일 때만 표시
    },
  },
};
