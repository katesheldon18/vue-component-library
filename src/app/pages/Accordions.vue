<template>
  <Accordion @click="onClick('test1')" :open="openId === 'test1'" />
  <Accordion @click="onClick('test2')" :open="openId === 'test2'"/>
  <Accordion @click="onClick('test3')" :open="openId === 'test3'"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Accordion from "../../components/Accordion.vue";

let openId = ref< string | null >('test1')

function onClick(id: string) {
  openId.value = openId.value === id ? null : id;
}
</script>