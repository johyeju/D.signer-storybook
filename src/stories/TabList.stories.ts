import type { Meta, StoryObj } from '@storybook/react';
import TabList from '../components/TabList';

const meta: Meta<typeof TabList> = {
  title: 'Tab/TabList',
  component: TabList,

  parameters: {
    layout: 'centered',
  },

  argTypes: {
    tabs: {
      control: 'object',
      description: '배열',
    },
  },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabA: Story = {
  args: {
    tabs: [
      { text: '홈', className: 'a-style' },
      { text: '소식', className: 'a-style' },
      { text: '메뉴', className: 'a-style' },
    ],
  },
};

export const TabB: Story = {
  args: {
    tabs: [
      { text: '홈', className: 'b-style' },
      { text: '소식', className: 'b-style' },
      { text: '메뉴', className: 'b-style' },
    ],
  },
};

export const TabC: Story = {
  args: {
    tabs: [
      { text: '홈', className: 'c-style' },
      { text: '소식', className: 'c-style' },
      { text: '메뉴', className: 'c-style' },
    ],
  },
};

export const TabF: Story = {
  args: {
    tabs: [
      { text: '홈', className: 'f-style' },
      { text: '소식', className: 'f-style' },
      { text: '메뉴', className: 'f-style' },
    ],
  },
};
