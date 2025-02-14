import type { Meta, StoryObj } from '@storybook/react';
import Profile from '../components/Profile';

const meta: Meta<typeof Profile> = {
  title: 'Buttons/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    profileImg: {
      control: 'text',
      description: '프로필 이미지 URL (비워두면 기본 아이콘 표시)',
      defaultValue: '',
    },
    nickName: {
      control: 'text',
      description: '닉네임 설정',
      defaultValue: '닉네임',
    },
    blogName: {
      control: 'text',
      description: '블로그 이름 설정',
      defaultValue: '블로그명',
    },
    date: {
      control: 'text',
      description: '날짜 설정 (YYYYMMDD 입력 가능)',
      defaultValue: '241225',
    },
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blog: Story = {
  args: {
    profileImg: '',
    nickName: '닉네임',
    blogName: '블로그명',
    date: '241225',
  },
};
