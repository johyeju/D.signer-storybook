import { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Content/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['Artery', 'WideArea', 'Default'],
      },
    },
    congestion: {
      control: 'radio',
      options: ['Default', 'Usually', 'crowded', 'last'],
    },

    text: {
      control: 'text',
    },
    num: {
      control: { type: 'number', min: 0, max: 99 }, // 최대 두 자리 숫자
      defaultValue: 33, // 기본값 33
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const ImageCount: Story = {
  args: {
    num: 33,
    className: 'image-count-style',
  },
  parameters: {
    controls: {
      exclude: ['congestion', 'text', 'type', 'className', 'label'],
    },
  },
};

export const Npay: Story = {
  args: {
    className: 'npay-style',
    isNpay: true,
  },
  parameters: {
    controls: { disable: true },
  },
};

export const talkTalk: Story = {
  args: {
    className: 'talktalk-style',
    isTalkTalk: true,
  },
  parameters: {
    controls: { disable: true },
  },
};

export const BusNum: Story = {
  args: {
    type: 'Default',
    text: '1234',
    className: 'bus-num-style',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['Artery', 'WideArea', 'Default'],
    },
  },
  parameters: {
    controls: {
      exclude: ['congestion', 'num', 'className', 'label'],
    },
  },
};

export const BusBadge: Story = {
  args: {
    text: 'NNNN',
    className: 'bus-badge-style',
    isIcon: true,
  },
  parameters: {
    controls: {
      exclude: [
        'congestion',
        'num',
        'type',
        'className',
        'label',
        'isProfile',
        'isIcon',
      ],
    },
    backgrounds: {
      default: 'dark', //백그라운드 추가
    },
  },
};

export const RemainingSeats: Story = {
  args: {
    num: 33,
    text: '석',
    className: 'remaining-seats-style',
  },
  argTypes: {},
  parameters: {
    controls: {
      exclude: ['congestion', 'text', 'type', 'className', 'label'],
    },
  },
};

export const StopLocation: Story = {
  args: {
    congestion: 'Default',
    className: 'stop-location-style',
  },
  argTypes: {
    congestion: {
      control: 'radio',
      options: ['Default', 'Usually', 'crowded', 'last'],
    },
  },
  parameters: {
    controls: {
      exclude: ['type', 'num', 'className', 'text'],
    },
  },
};
export const Village: Story = {
  args: {
    text: '마을',
    type: 'Default',
    className: 'village-style',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['Default', 'translucent'],
    },
  },
  parameters: {
    controls: {
      exclude: ['congestion', 'text', 'num', 'className', 'label'],
    },
    backgrounds: {
      default: 'dark', //백그라운드 추가
    },
  },
};

export const TransportState: Story = {
  args: {
    text: '중앙',
    className: 'transport-state-style',
  },
  parameters: {
    controls: {
      exclude: ['congestion', 'text', 'num', 'type', 'className', 'label'],
      //controls패널 false처리
    },
  },
};

export const Profile: Story = {
  args: {
    text: 'nickname',
    className: 'profile-style',
    isProfile: true,
  },
  parameters: {
    controls: {
      exclude: ['congestion', 'num', 'type', 'className', 'label', 'isProfile'],
    },
    backgrounds: {
      default: 'dark', //백그라운드 추가
    },
  },
};
