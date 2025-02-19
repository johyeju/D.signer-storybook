import { Meta, StoryObj } from '@storybook/react';
import MapMaker from '../components/MapMaker';

const meta: Meta<typeof MapMaker> = {
  title: 'Content/BadgeIcons',
  component: MapMaker,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    iconName: {
      control: 'radio',
      options: ['star_maker', 'spot', 'pin'],
    },

    theme: {
      control: 'radio',
      options: ['Green', 'Red'],
      defaultValue: 'Green',
      if: { arg: 'iconName', eq: 'spot' },
    },
    color: {
      control: 'radio',
      options: ['Red', 'Blue'],
      defaultValue: 'Red',
      if: { arg: 'iconName', eq: 'pin' },
    },
    size: {
      control: 'radio',
      options: ['R', 'L'],
      defaultValue: 'R',
      if: { arg: 'iconName', eq: 'pin' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MapMaker>;

export const Default: Story = {
  args: {
    iconName: 'spot',
    theme: 'Green',
  },
};
