<template>
  <label>
    <input type="checkbox" :checked="modelValue" @change="onChange" />
    <span>label</span>
  </label>
</template>


<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>();
const emit = defineEmits(['update:modelValue']);

const onChange = (e) => {
  return emit('update:modelValue', e.target.checked);
}
</script>