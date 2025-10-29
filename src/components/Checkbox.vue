<template>
  <label class="checkbox" :class="className">
    <input type="checkbox" :checked="modelValue" @change="onChange" class="checkbox__input" />
    <span class="checkbox__checkmark" :class="{'is-checked': modelValue}">
      <slot name="checkmark">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15l5 5L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </slot>
    </span>
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>


<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean,
  label: string,
  className?: string,
}>();
const emit = defineEmits(['update:modelValue']);

const onChange = (e) => {
  return emit('update:modelValue', e.target.checked);
}
</script>

<style scoped lang="scss">
@import "../app/styles/variables.scss";

.checkbox {
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: relative;
}

.checkbox__input {
  appearance: none;
  -webkit-appearance: none;
  width: 1rem;
  height: 1rem;
  border: 1px solid $color-primary;
  border-radius: 0.25rem;
  background-color: white;
  position: relative;

  &:checked {
    background-color: $color-primary;
  }
}

.checkbox__checkmark {
  display: none;
  position: absolute;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  color: $white;
  top: 0;
  left: 0;
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.checkbox__checkmark.is-checked {
  display: inline-flex;
}

.checkbox__label {
  color: $color-text;
  font-size: $text-body;
}

</style>