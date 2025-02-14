import { Meta, StoryObj } from '@storybook/react';
import ListRadio, { ListRadioProps } from '../components/ListRadio'; // ✅ 수정됨!

export default {
  title: 'Radio/ListRadio',
  component: ListRadio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { control: 'radio', options: ['s', 'm'], description: '사이즈' },
    isActive: { control: 'boolean', description: '활성화 여부' },
    label: { control: 'text', description: '상단 텍스트' },
    description: { control: 'text', description: '설명 텍스트' },
  },
} as Meta<ListRadioProps>;

type Story = StoryObj<ListRadioProps>;

export const MoveInfo: Story = {
  args: {
    size: 's',
    isActive: false,
    label: '최적 경로순',
    description:
      '소요 시간 및 운행 정보, 환승 횟수 등을 종합적으로 고려한 경로 순서입니다.',
  },
  parameters: {
    controls: {
      exclude: ['label', 'description'],
    },
  },
};
