import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, watch } from 'vue';

import Switch from '../../src/components/Switch.vue';

const meta = {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
  },
  args: {
    modelValue: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const render: Story['render'] = (args) => ({
  components: { Switch },
  setup() {
    const modelValue = ref(args.modelValue);

    watch(
      () => args.modelValue,
      (value) => {
        modelValue.value = value;
      },
    );

    return { modelValue };
  },
  template: `
    <Switch
      :model-value="modelValue"
      @update:model-value="modelValue = $event"
    />
  `,
});

export const Off: Story = {
  args: {
    modelValue: false,
  },
  render,
};

export const On: Story = {
  args: {
    modelValue: true,
  },
  render,
};
