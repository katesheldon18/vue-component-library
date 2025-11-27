import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

import Note from '../../src/components/Note.vue';

const meta = {
    title: 'Example/Note',
    component: Note,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary'] },
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        title: 'Note Title',
    },
    render: (args) => ({
      components: { Note },
      setup() { return { args } },
      template: `<Note v-bind="args">This is a note</Note>`
    })
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        title: 'Note Title',
    },
    render: (args) => ({
      components: { Note },
      setup() { return { args } },
      template: `<Note v-bind="args">This is a note</Note>`
    })
};

export const NoTitle: Story = {
    args: {
        variant: 'primary',
    },
    render: (args) => ({
        components: { Note },
        setup() { return { args } },
        template: `<Note v-bind="args">This is a note</Note>`
    })
};