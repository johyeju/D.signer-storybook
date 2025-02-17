import { Meta, StoryObj } from '@storybook/react';
import BoxSwitch from '../components/BoxSwitch';
import { iconSwitches } from '../components/IconSwitchType';

const meta: Meta<typeof BoxSwitch> = {
  title: 'Switch/BoxSwitch',
  component: BoxSwitch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.keys(iconSwitches) as (keyof typeof iconSwitches)[],
    },
    isOn: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    text: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'select' },
      options: ['blue', 'green'],
      if: { arg: 'name', eq: 'star' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BoxSwitch>;

export const Default: Story = {
  args: {
    name: 'star',
    isOn: true,
    text: 'content',
    type: 'blue',
  },
};
