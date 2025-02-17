import { Meta, StoryObj } from '@storybook/react';
import IconSwitch from '../components/IconSwitch';
import { iconSwitchNames } from '../components/IconSwitchType';

const meta: Meta<typeof IconSwitch> = {
  title: 'Buttons/IconSwitch',
  component: IconSwitch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconSwitchNames,
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconSwitch>;

export const Default: Story = {
  args: {
    name: 'pin',
  },
};
