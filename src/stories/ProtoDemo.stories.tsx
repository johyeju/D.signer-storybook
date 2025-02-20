import { Meta, StoryObj } from '@storybook/react';
import { ProtoDemoPage } from '../components/ProtoDemo';

export default {
  title: 'Proto Demo | Naver Map',
  component: ProtoDemoPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProtoDemoPage>;

export const Default: StoryObj<typeof ProtoDemoPage> = {};
