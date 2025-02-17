import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-docs',
	],

	framework: {
		name: '@storybook/react-vite',
		options: {},
	},

	viteFinal: (config) =>
		mergeConfig(config, {
			base: '/D.signer-storybook/',
		}),

	docs: {},

	typescript: {
		reactDocgen: 'react-docgen-typescript',
	},
};
export default config;
