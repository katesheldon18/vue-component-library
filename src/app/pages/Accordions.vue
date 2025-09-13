<template>
  <h1>Accordions</h1>
  <Accordion @click="onClick('test1')" :open="openId === 'test1'">
    <template #title>Lorem Ipsum</template>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
  </Accordion>
  <Accordion @click="onClick('test2')" :open="openId === 'test2'">
    <template #title>Lorem Ipsum</template>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
  </Accordion>
  <Accordion @click="onClick('test3')" :open="openId === 'test3'">
    <template #title>Lorem Ipsum</template>
    <template #content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</template>
  </Accordion>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Accordion from "../../components/Accordion.vue";

let openId = ref< string | null >('test1')

function onClick(id: string) {
  openId.value = openId.value === id ? null : id;
}
</script>