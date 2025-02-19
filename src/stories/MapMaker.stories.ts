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
      options: ['star_maker', 'spot'],
    },

    theme: {
      control: 'radio',
      options: ['Green', 'Red'],
      defaultValue: 'Green',
      if: { arg: 'iconName', eq: 'spot' },
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
