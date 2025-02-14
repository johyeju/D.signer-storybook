import type { Meta, StoryObj } from '@storybook/react';
import Chip from '../components/Chip';

const meta: Meta<typeof Chip> = {
  title: 'Chip/Chip',
  component: Chip,
  argTypes: {
    text: { control: 'text' },
    isActive: { control: 'boolean' },
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    options: { showPanel: true },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    text: 'content',
    isActive: false,
  },
};
