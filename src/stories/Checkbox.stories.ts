import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import Checkbox from '../../src/components/Checkbox.vue';

const meta = {
    title: 'Example/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary'] },
    },
    // args: {
    //     onClick: fn(),
    // },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'primary',
    },
};
