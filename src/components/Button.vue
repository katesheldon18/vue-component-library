<template>
  <button :type="type" class="button" :class="[classes, className]" :disabled="disabled" :loading="loading">
      <span :class="{ 'is-hidden': loading }">
        <slot name="icon" />
        <slot>Click</slot>
      </span>
      <span v-if="loading" class="spinner"></span>
  </button>
</template>

<script setup lang="ts">
  import {computed} from "vue";

  const props = defineProps<{
    className?: string,
    disabled?: boolean,
    loading?: boolean,
    size?: 'sm' | 'lg',
    type?: 'button' | 'submit' | 'reset',
    variant?: 'primary' | 'secondary' | 'success' | 'info' | 'warning',
  }>()

  const { className, disabled = false, loading = false, size, type = 'button', variant = 'primary' } = props

  const classes = computed(() => {
    return {
      [`button--${variant}`]: !!variant,
      [`button--${size}`]: !!size,
      'is-loading': loading,
    }
  })
</script>

<style scoped lang="scss">
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 1rem;

    &:hover {
      opacity: 0.8;
    }

    &.is-loading {
      pointer-events: none;
      opacity: 0.8;
    }

    &--primary {
      background-color: lightblue;
      border: 1px solid lightblue;
    }
    &--secondary {
      background-color: transparent;
      border: 1px solid black;
    }
    &--sm {
      padding: 0.25rem 0.5rem;
      font-size: 0.6275rem;
    }
    &--lg {
      padding: 0.75rem 1.5rem;
      font-size: 1.25rem;
    }


    .is-hidden {
      opacity: 0;
    }
  }

  .spinner {
    position: absolute;
    width: 1em;
    height: 1em;
    border: 2px solid white;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 0.8s infinite linear;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>