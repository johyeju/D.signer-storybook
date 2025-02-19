import { Meta, StoryObj } from '@storybook/react';
import { ProtoDemoPage } from '../components/ProtoDemo';

export default {
  title: 'Proto Demo | Naver Map',
  component: ProtoDemoPage,
  parameters: {
    layout: 'fullscreen', // 스토리북에서 전체화면 레이아웃 사용
  },
} satisfies Meta<typeof ProtoDemoPage>;

export const Default: StoryObj<typeof ProtoDemoPage> = {};
