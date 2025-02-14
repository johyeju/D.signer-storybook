import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/SearchBar';
import { iconNames } from '../components/IIconTypes'; // icons 대신 iconNames 사용
import '../components/SearchBar.css';

const meta = {
  title: 'SearchBar/SearchBar',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '헤더 제목',
      defaultValue: 'Title',
    },
    showLeftIcon: {
      control: 'boolean',
      description: '좌측 아이콘 on/off',
      defaultValue: true,
    },
    leftIcon: {
      control: { type: 'select' },
      options: iconNames, // iconNames에서 목록 불러오기
      description: '좌측 아이콘 선택',
      if: { arg: 'showLeftIcon' }, // showLeftIcon이 true일 때만 노출
    },
    showRightIcon: {
      control: 'boolean',
      description: '우측 아이콘 on/off',
      defaultValue: true,
    },
    rightIcon: {
      control: { type: 'select' },
      options: iconNames, // iconNames에서 목록 불러오기
      description: '우측 아이콘 선택',
      if: { arg: 'showRightIcon' }, // showRightIcon이 true일 때만 노출
      defaultValue: 'close',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    showLeftIcon: true,
    leftIcon: 'call',
    showRightIcon: true,
    rightIcon: 'call',
  },
  parameters: {
    controls: {
      exclude: ['showLeftIcon', 'showRightIcon'], // 패널 숨김
    },
  },
};
