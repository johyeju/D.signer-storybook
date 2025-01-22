import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextField from './components/TextField';

const meta = {
  title: 'TextFields/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: {
      control: 'text',
      description: '아이콘 이미지의 alt 속성',
      defaultValue: 'icon',
    },
    iconPath: {
      control: 'text',
      description: '아이콘 이미지의 경로',
      defaultValue: '',
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
      defaultValue: '',
    },
    onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
    onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
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
    iconAlt: 'icon',
    iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg',
    placeholder: '텍스트를 입력해주세요',
    value: '',
    id: 'email',
  },
};
