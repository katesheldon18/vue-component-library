import type { Meta, StoryObj } from '@storybook/vue3';

import Toast from '../../src/components/Toast.vue';

const meta = {
    title: 'Example/Toast',
    component: Toast,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    },
    args: {
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: 'Information!',
        subtext: 'Hello, this is Toast.',
        autoDismiss: false,
    },
    render: (args) => ({
        components: { Toast },
        setup() { return { args } },
        template: `<Toast v-bind="args" />`
    })
};

export const Success: Story = {
    args: {
        variant: 'success',
        message: 'Success!',
        subtext: 'Congratulations',
        autoDismiss: false,
    },
    render: (args) => ({
        components: { Toast },
        setup() { return { args } },
        template: `<Toast v-bind="args" />`
    })
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        message: 'Warning!',
        autoDismiss: false,
    },
    render: (args) => ({
        components: { Toast },
        setup() { return { args } },
        template: `<Toast v-bind="args" />`
    })
};

export const Error: Story = {
    args: {
        variant: 'error',
        message: 'Error Message',
        autoDismiss: false,
    },
    render: (args) => ({
        components: { Toast },
        setup() { return { args } },
        template: `<Toast v-bind="args" />`
    })
};
