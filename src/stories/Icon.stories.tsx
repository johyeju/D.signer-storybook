import { Meta, StoryFn } from '@storybook/react';
import Icon from '../components/Icon';
import { iconNames } from '../components/IIconTypes';

// 사이즈 제한
const iconSizes = [12, 14, 16, 18, 24, 32];

export default {
  title: 'Buttons/Icon',
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
