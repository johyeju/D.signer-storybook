import type { Meta, StoryObj } from '@storybook/react';
import LinkBtn from '../components/LinkBtn';
import { iconNames } from '../components/IIconTypes';
import '../components/LinkBtn.css';

const meta: Meta<typeof LinkBtn> = {
  title: 'Buttons/LinkBtn',
  component: LinkBtn,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: '버튼 텍스트 수정 가능',
      defaultValue: '링크 버튼',
    },
    showIcon: {
      control: 'boolean',
      description: '아이콘 표시 여부 토글',
    },
    icon: {
      control: { type: 'select' },
      options: iconNames,
      description: '아이콘 선택 드롭다운',
      if: { arg: 'showIcon' }, // showIcon이 true일 때만 드롭다운 표시
    },
  },
} satisfies Meta<typeof LinkBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'https://524hhhhhh.github.io/D.signer-storybook/',
    showIcon: false,
    icon: undefined,
  },
};
