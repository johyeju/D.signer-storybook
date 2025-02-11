import type { Meta, StoryObj } from '@storybook/react';
import PillBtn from '../components/PillBtn';
import { iconNames } from '../components/IIconTypes';
import '../components/PillBtn.css';

const buttonSizes = ['xs', 's', 'm', 'l'];

const meta: Meta<typeof PillBtn> = {
  title: 'Buttons/PillBtn',
  component: PillBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: '버튼 내 텍스트 수정 가능',
      defaultValue: 'content',
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
    text: 'content',
    size: 'l',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
  },
};

export const InfoEx: Story = {
  args: {
    text: 'content',
    size: 'l',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: true,
    rightIcon: undefined,
    className: 'info-ex-style', //style
  },
  argTypes: {
    rightIcon: {
      control: { type: 'select' },
      options: iconNames,
      description: '우측 아이콘 변경 가능',
    },
    size: { control: false },
    showLeftIcon: { control: false },
    showRightIcon: { control: false },
  },
};

export const MyPlacesFilter: Story = {
  args: {
    size: 'l',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
    className: 'my-place-filter-style', //style
  },
  parameters: {
    controls: { disable: true },
  },
};

export const CategoryFilter: Story = {
  args: {
    size: 'l',
    showLeftIcon: false,
    leftIcon: undefined,
    showRightIcon: false,
    rightIcon: undefined,
    className: 'category-filter', //style
  },
  parameters: {
    controls: { disable: true },
  },
};
