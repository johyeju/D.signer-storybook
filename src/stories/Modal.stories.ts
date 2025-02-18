import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from '../components/Modal';

export default {
  title: 'Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['Radio', 'TimePicker'],
      description: '모달 타입',
    },
    title: { control: 'text', description: '모달 제목' },
    options: { table: { disable: true } },
  },
} as Meta<ModalProps>;

type Story = StoryObj<ModalProps>;

export const DefaultModal: Story = {
  args: {
    type: 'Radio',
    title: '정렬 기준',
    options: [
      { title: '최적 경로순', size: 'S' },
      { title: '최소 환승순', size: 'S' },
      { title: '최소 거리순', size: 'S' },
      { title: '최소 시간순', size: 'S' },
    ],
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
