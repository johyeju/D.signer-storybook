import type { Preview } from '@storybook/react';
import '../src/index.css'; //Global Css

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light', // 기본 배경색을 dark로 설정
			values: [
				{ name: 'light', value: '#ffffff' }, // 밝은 배경
				{ name: 'dark', value: '#000000' }, // 어두운 배경
			],
		},
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
