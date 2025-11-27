import type { Meta, StoryObj } from '@storybook/vue3';
import {ref} from "vue";

import Accordion from '../../src/components/Accordion.vue';

const meta = {
    title: 'Example/Accordion',
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        open: { control: 'boolean', options: ['true', 'false'] },
    },
    args: {
        open: true,
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultOpenWithContent: Story = {
  render: (args) => ({
    components: { Accordion },
    setup() {
      const localOpen = ref(args.open);
      function toggle() { localOpen.value = !localOpen.value; }
      return { localOpen, toggle, args };
    },
      args: {
        open: true,
      },
    template: `
      <Accordion :open="localOpen" @toggle="toggle">
        <template #title>Lorem Ipsum</template>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </template>
      </Accordion>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<Accordion :open="true">
  <template #title>Lorem Ipsum</template>
  <template #content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </template>
</Accordion>
        `
      }
    }
  }
};

export const MultipleAccordion: Story = {
    render: (args) => ({
        components: { Accordion },
        setup() {
          const openId = ref('one');
          function onToggle(id) {
            openId.value = openId.value === id ? null : id;
          }
          return { openId, onToggle };
        },
        template: `
          <div>
            <Accordion :open="openId === 'one'" @toggle="onToggle('one')">
              <template #title>Accordion One</template>
              <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
            </Accordion>
            <Accordion :open="openId === 'two'" @toggle="onToggle('two')">
              <template #title>Accordion Two</template>
              <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
            </Accordion>
            <Accordion :open="openId === 'three'" @toggle="onToggle('three')">
              <template #title>Accordion Three</template>
              <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</template>
            </Accordion>
          </div>
        `
    }),
  parameters: {
    docs: {
      source: {
        code: `
<template>
  <Accordion :open="openId === 'one'" @toggle="onToggle('one')">
    <template #title>Accordion One</template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </template>
  </Accordion>

  <Accordion :open="openId === 'two'" @toggle="onToggle('two')">
    <template #title>Accordion Two</template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </template>
  </Accordion>

  <Accordion :open="openId === 'three'" @toggle="onToggle('three')">
    <template #title>Accordion Three</template>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </template>
  </Accordion>
</template>

<script setup>
import { ref } from 'vue'

const openId = ref('one')

function onToggle(id) {
  openId.value = openId.value === id ? null : id
}
</script>
        `
      }
    }
  }
};
