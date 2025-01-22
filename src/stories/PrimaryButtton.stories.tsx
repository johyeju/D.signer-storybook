import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import PrimaryButton from '../components/PrimaryButton';
import { icons } from '../components/IconTypes';

const meta = {
  title: 'Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['dark', 'light', 'social', 'text'],
      },
      description: '버튼 테마',
      defaultValue: 'dark',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
      defaultValue: 'Button',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
      defaultValue: false,
    },
    icon: {
      control: {
        type: 'select', // 드롭다운으로 설정
      },
      options: Object.keys(icons),
      mapping: Object.fromEntries(
        Object.entries(icons).map(([key, value]) => [
          key,
          value
            ? { alt: key, iconPath: value } // 각 키를 적절히 매핑
            : undefined, // 'none'에 대한 처리
        ])
      ),
      description: '아이콘 선택',
      defaultValue: undefined, // 기본값은 undefined (아이콘 없음)
    },
    onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    theme: 'dark',
    disabled: false,
    icon: undefined, // 기본값: 아이콘 없음
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button with Icon',
    theme: 'dark',
    disabled: false,
    icon: { alt: 'delete', iconPath: icons.delete }, // delete 아이콘 사용
  },
};
