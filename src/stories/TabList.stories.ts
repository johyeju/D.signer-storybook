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
      { text: '리뷰', className: 'a-style' },
      { text: '사진', className: 'a-style' },
      { text: '주변', className: 'a-style' },
      { text: '정보', className: 'a-style' },
    ],
  },
};

export const TabB: Story = {
  args: {
    tabs: [
      { text: '전체', className: 'b-style' },
      { text: '버스', num: 12, className: 'b-style' },
      { text: '지하철', num: 1, className: 'b-style' },
    ],
  },
};

export const TabC: Story = {
  args: {
    tabs: [
      { text: '전체', className: 'c-style' },
      { text: '음식점', className: 'c-style' },
      { text: '카페', className: 'c-style' },
      { text: '쇼핑', className: 'c-style' },
      { text: '여행', className: 'c-style' },
      { text: 'Bar', className: 'c-style' },
    ],
  },
};
export const TabE: Story = {
  args: {
    tabs: [
      {
        iconName: 'bus',
        className: 'e-style',
      },
      {
        iconName: 'car',
        className: 'e-style',
      },
      {
        iconName: 'walk',
        className: 'e-style',
      },
      {
        iconName: 'bicycle',
        className: 'e-style',
      },
    ],
  },
};

export const TabF: Story = {
  args: {
    tabs: [
      { text: '취미생활', className: 'f-style' },
      { text: '취미생활', className: 'f-style' },
      { text: '취미생활', className: 'f-style' },
    ],
  },
};

export const TabG: Story = {
  args: {
    tabs: [
      { text: '장소', className: 'g-style' },
      { text: '경로', className: 'g-style' },
    ],
  },
  parameters: {
    backgrounds: {
      default: 'dark', //백그라운드 추가
    },
  },
};
