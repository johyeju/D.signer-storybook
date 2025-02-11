import type { Preview } from '@storybook/react';
import '../src/index.css'; // Pretendard 폰트

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
