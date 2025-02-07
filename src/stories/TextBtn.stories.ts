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
    text: 'contents',
  },
};
