import { Meta, StoryFn } from '@storybook/react';
import Icon from '../components/Icon';
import { iconNames } from '../components/IIconTypes';

const iconSizes = [12, 14, 16, 18, 24, 32];

export default {
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
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'badge',
  size: 24,
};
