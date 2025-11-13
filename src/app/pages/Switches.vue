<template>
  <h1>Switch</h1>
  <div>
    <Switch v-model="isToggled" />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Switch from '../../components/Switch.vue';

const isToggled = ref(false);

</script>

<style scoped lang="scss">
div {
  margin: 1rem 0;
}
button {
  margin: 0.5rem 0;
}
</style>