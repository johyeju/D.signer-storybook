import { Meta, StoryObj } from '@storybook/react';
import ControlBtn from '../components/ControlBtn';
import { iconNames } from '../components/IIconTypes';

const meta: Meta<typeof ControlBtn> = {
  title: 'Buttons/ControlBtn',
  component: ControlBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconNames,
      description: '우측 아이콘 선택 드롭다운',
    },
    leftIcon: {
      control: { type: 'select' }, // 좌측 아이콘 드롭다운
      options: iconNames,
      description: '좌측 아이콘 선택 드롭다운',
    },
    text: {
      control: false, // 텍스트 수정 비활성화
      description: '변경 불가',
    },
    num: {
      control: { type: 'number', min: 0, max: 99 }, // 최대 두 자리 숫자
      description: '우측에 표시될 최대 두 자리 숫자',
      defaultValue: 33, // 기본값 33
    },
  },
} satisfies Meta<typeof ControlBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MoveInfo: Story = {
  args: {
    text: '버스 도착정보 더보기', // 고정 텍스트
    icon: undefined,
    leftIcon: undefined,
  },
  parameters: {
    controls: {
      exclude: ['leftIcon', 'num'], // MoveInfo 스토리에서 leftIcon, num 숨김
    },
  },
};

export const Alert: Story = {
  args: {
    text: '폐업했거나 정보가 없는 장소', // 고정 텍스트
    icon: undefined,
    leftIcon: undefined,
    num: 33, // 기본 숫자값 설정
    variant: 'alert',
  },
};
