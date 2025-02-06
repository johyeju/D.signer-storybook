import { Meta, StoryFn } from '@storybook/react';
import Icon from '../components/Icon';

// 아이콘 목록을 자동으로 가져오기
const iconNames = [
  'badge',
  'cafe',
  'call',
  'convenience_store',
  'naver_reservation',
  'restaurant',
  'down_arrow',
  'edit',
  'left_arrow',
  'right_arrow',
  'share',
];

// 제한된 사이즈 목록
const iconSizes = [12, 14, 16, 18, 24, 32];

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    name: {
      control: { type: 'select' }, // 드롭다운 선택 가능
      options: iconNames, // 아이콘 목록 추가
    },
    size: {
      control: { type: 'radio' }, // ✅ 사이즈를 정해진 값에서만 선택 가능하게 설정
      options: iconSizes, // ✅ 선택 가능한 아이콘 크기 목록
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'badge',
  size: 24, // 기본값
};
