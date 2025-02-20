import { Meta, StoryObj } from '@storybook/react';
import Icon from '../components/Icon';
import { iconNames } from '../components/IIconTypes';

const iconSizes = [12, 14, 16, 18, 24, 32];

const meta: Meta<typeof Icon> = {
  title: 'Buttons/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
    },
    size: {
      control: { type: 'radio' },
      options: iconSizes,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'place',
    size: 24,
  },
};
