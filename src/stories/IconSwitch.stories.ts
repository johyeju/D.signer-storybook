import { Meta, StoryObj } from '@storybook/react';
import IconSwitch from '../components/IconSwitch';
import { iconSwitchNames } from '../components/IconSwitchType';

const meta: Meta<typeof IconSwitch> = {
  title: 'Switch/IconSwitch',
  component: IconSwitch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconSwitchNames,
    },
    isOn: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    type: {
      control: { type: 'select' },
      options: ['blue', 'green'],
      if: { arg: 'name', eq: 'star' }, // star일 때만 type 선택 가능
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconSwitch>;

export const Default: Story = {
  args: {
    name: 'star',
    isOn: false,
    type: 'blue',
  },
};
