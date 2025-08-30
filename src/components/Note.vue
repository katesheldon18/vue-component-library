<template>
  <div :class="`note note--${variant}`">
    <div v-if="title" class="note__header">
      <strong class="note__title">{{ title }}</strong>
    </div>
    <div class="note__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  const { variant = 'primary', title = '' } = defineProps<{
    variant?: 'primary' | 'secondary',
    title?: string,
  }>()
</script>

<style lang="scss" scoped>
@import "../app/styles/variables.scss";

.note {
  padding: 1rem;
  border-radius: 4px;
  font-size: $text-body;

  &--primary {
    color: $color-text;
    background-color: $color-primary-bg;
  }
  &--secondary {
    color: $color-primary-text;
    background-color: $color-secondary-bg;
  }

  .note__header {
    margin-bottom: 0.5rem;
  }
}
</style>