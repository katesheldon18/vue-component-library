<template>
  <h1>Buttons</h1>
  <div>
    <Button />
  </div>
  <div>
    <Button variant="secondary"/>
  </div>
  <div>
    <Button loading />
  </div>
  <div>
    <Button variant="secondary" size="lg" loading />
  </div>
</template>

<script setup lang="ts">
import Button from "../../components/Button.vue";
</script>

<style scoped>
  div {
    margin: 1rem 0;
  }
</style>