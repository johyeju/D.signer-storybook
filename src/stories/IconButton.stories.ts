//삭제예정

import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../components/IconButton';

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconPath: {
      control: 'text',
      description: '이미지의 경로',
      defaultValue: '',
    },
    type: {
      control: 'text',
      description: '버튼의 타입 또는 아이콘 설명',
      defaultValue: 'icon',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트 핸들러',
    },
  },
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg',
    type: 'delete icon',
  },
};
