import { Meta, StoryObj } from '@storybook/react';
import ImageGrid from '../components/imgList';

// 윈도우 배경화면 기본 이미지 배열 (9개)
const defaultBackgroundImages = [
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  'https://images.unsplash.com/photo-1473172707857-f9e276582ab6',
  'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
  'https://images.unsplash.com/photo-1480506132288-68f7705954bd',
  'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
];

const meta: Meta<typeof ImageGrid> = {
  title: 'Content/ImageGrid',
  component: ImageGrid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    imageCount: {
      control: { type: 'radio' },
      options: [1, 3, 5, 9],
      description: '이미지 갯수 선택',
    },
    images: {
      control: { type: 'object' },
      description: '이미지 정적 URLs ',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageGrid>;

export const Default: Story = {
  args: {
    imageCount: 9,
    images: defaultBackgroundImages,
  },
};
