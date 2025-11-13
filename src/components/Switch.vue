<template>
  <label class="switch">
    <input type="checkbox" :checked="modelValue" @change="onChange" class="switch__input"/>
    <div class="switch__background">
      <span class="switch__switch" :class="{'switch__switch--on': modelValue}"></span>
    </div>
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>()

const emit = defineEmits(['update:modelValue']);
const onChange = (e) => {
  emit('update:modelValue', e.target.checked);
}
</script>

<style scoped lang="scss">
@import "../app/styles/variables.scss";

  .switch__input {
    display: none;
  }
  .switch__background {
    position: relative;
    width: 4rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: $color-primary-bg;
    cursor: pointer;
  }
  .switch__switch {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(100% - 1.8rem);
    background-color: $color-primary-text;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 100%;
    transition: right 0.2s ease-in-out;

    &--on {
      right: calc(0rem + 0.2rem);

    }
  }
</style>