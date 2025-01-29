import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextField from '../components/TextField';
import { icons } from '../components/IconTypes';

const meta = {
  title: 'TextFields/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconType: {
      control: {
        type: 'select', // 드롭다운으로 설정
        options: Object.keys(icons), // IconTypes의 키를 옵션으로 설정
      },
      mapping: icons, // 아이콘 타입에 경로를 매핑
      description: '아이콘 타입 선택',
      defaultValue: 'delete', // 기본값 설정
    },
    placeholder: {
      control: 'text',
      description: '텍스트 필드의 placeholder',
      defaultValue: '텍스트를 입력해주세요',
    },
    value: {
      control: 'text',
      description: '텍스트 필드의 값',
      defaultValue: '',
    },
    id: {
      control: 'text',
      description: '텍스트 필드의 id',
      defaultValue: 'text-field',
    },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
    onIconClick: { action: 'clicked', description: '아이콘 클릭 이벤트' },
  },
  args: {
    onIconClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconType: 'delete',
    placeholder: '텍스트를 입력해주세요',
    value: '',
    id: 'text-field',
  },
};
