import { Meta, StoryObj } from '@storybook/react';
import MapMaker from '../components/MapMaker';

const meta: Meta<typeof MapMaker> = {
  title: 'Content/MapMaker',
  component: MapMaker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['R', 'M', 'L'],
      defaultValue: 'R',
    },
    theme: {
      control: 'radio',
      options: ['Green', 'Red', 'Blue'],
      defaultValue: 'Green',
    },
    color: {
      control: 'color',
      defaultValue: '#CAD1DB',
    },
    text: {
      control: 'radio',
      options: ['출발', '도착'],
      if: { arg: 'iconName', eq: 'spot' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MapMaker>;

/**
 * `star_maker` 아이콘 스토리
 */
export const StarMaker: Story = {
  args: {
    iconName: 'star_maker',
    size: 'L',
    color: '#CAD1DB',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['R', 'L'],
    },
  },
  parameters: {
    controls: {
      exclude: ['iconName', 'theme'],
    },
  },
};

/**
 * `pin` 아이콘 스토리
 */
export const Pin: Story = {
  args: {
    iconName: 'pin',
    size: 'L',
    theme: 'Red',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['Red', 'Blue'],
    },
    size: {
      control: 'radio',
      options: ['R', 'L'],
    },
  },

  parameters: {
    controls: {
      exclude: ['iconName', 'color'],
    },
  },
};

/**
 * `spot` 아이콘 스토리
 */
export const Spot: Story = {
  args: {
    iconName: 'spot',
    size: 'L',
    theme: 'Red',
    text: '출발',
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['Red', 'Green'],
    },
  },

  parameters: {
    controls: {
      exclude: ['iconName', 'color'],
    },
  },
};
