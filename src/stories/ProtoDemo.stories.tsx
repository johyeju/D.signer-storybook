import { Meta, StoryObj } from '@storybook/react';
import { ProtoDemoPage } from '../components/ProtoDemo';

const NoScrollbarDecorator = (Story) => (
  <div style={{ overflow: 'hidden' }}>
    <style>
      {`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
    <Story />
  </div>
);

export default {
  title: 'Proto Demo | Naver Map',
  component: ProtoDemoPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProtoDemoPage>;

export const Default: StoryObj<typeof ProtoDemoPage> = {};
Default.decorators = [NoScrollbarDecorator];
