import type { Meta, StoryObj } from '@storybook/react';
import PillBtn from '../components/PillBtn';
import { iconNames } from '../components/IIconTypes';

const buttonSizes = ['s', 'm', 'l'];

const meta: Meta<typeof PillBtn> = {
  title: 'Buttons/PillBtn',
  component: PillBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      control: 'text',
      description: '버튼 내 텍스트 수정 가능',
      defaultValue: 'contents',
    },
    size: {
      control: { type: 'radio' },
      options: buttonSizes,
      description: '버튼 크기 선택',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'IcoLeft on/off 스위치',
    },
    leftIcon: {
      control: { type: 'select' }, // 드롭다운에서 선택 가능
      options: iconNames, // iconNames에서 목록 불러오기
      description: 'IcoLeft 아이콘 변경 가능',
      if: { arg: 'showLeftIcon' }, // IcoLeft가 활성화될 때만 드롭다운 표시
    },
    showRightIcon: {
      control: 'boolean',
      description: 'IcoRight on/off 스위치',
    },
    rightIcon: {
      control: { type: 'select' }, // 드롭다운에서 선택 가능
      options: iconNames, // iconNames에서 목록 불러오기
      description: 'IcoRight 아이콘 변경 가능',
      if: { arg: 'showRightIcon' }, // IcoRight가 활성화될 때만 드롭다운 표시
    },
  },
} satisfies Meta<typeof PillBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
    size: 'm',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
  },
};

export const InfoEx: Story = {
  args: {
    size: 'm',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
  },
  parameters: {
    controls: { disable: true },
  },
};

export const MyPlacesFilter: Story = {
  args: {
    size: 'm',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
  },
  parameters: {
    controls: { disable: true },
  },
};

export const CategoryFilter: Story = {
  args: {
    size: 'm',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
  },
  parameters: {
    controls: { disable: true },
  },
};
