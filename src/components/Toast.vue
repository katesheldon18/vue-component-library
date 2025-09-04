<template>
  <Transition :name="transitionName">
    <template v-if="visible">
      <div
        class="toast"
        :class="['toast--' + variant]">
        <div class="toast__header">
          <div v-if="message" class="toast__message">
            {{ message }}
          </div>
          <button class="toast__close" aria-label="Dismiss" @click="handleDismiss">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div v-if="subtext" class="toast__subtext">
          {{ subtext}}
        </div>
      </div>
    </template>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, useSlots } from 'vue'

const visible = ref(false);
const emits = defineEmits(['dismiss']);
const transitionName = ref('toast');

const {variant = 'info', duration = 4000, index = 0} = defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'error';
  message?: string;
  subtext?: string;
  duration?: number;
  index?: number;
}>();

function handleDismiss() {
  visible.value = false;
  transitionName.value = 'toast';
}

onMounted(() => {
  visible.value = true;

  setTimeout(() => {
    visible.value = false;
    transitionName.value = 'toast-fade';
  }, duration)
})

watch(visible, (newVal) => {
  if (!newVal) setTimeout(() => emits('dismiss'), 300);
})

</script>

<style lang="scss">
@import "../app/styles/variables.scss";

  .toast {
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: $text-sm;
    right: 1rem;
    width: 20rem;

    &--info {
      color: $color-info-text;
      background-color: $color-info-bg;
      border: 1px solid $color-info-border;
    }

    &--success {
      color: $color-success-text;
      background-color: $color-success-bg;
      border: 1px solid $color-success-border;
    }

    &--warning {
      color: $color-warning-text;
      background-color: $color-warning-bg;
      border: 1px solid $color-warning-border;
    }

    &--error {
      color: $color-error-text;
      background-color: $color-error-bg;
      border: 1px solid $color-error-border;
    }

    .toast__header {
      display: flex;
      justify-content: space-between;
    }

    .toast__close {
      line-height: 0;
    }

    .toast__message {
      font-weight: $font-bold;
    }

    .toast__subtext {
      margin-top: 0.25rem;
      font-size: $text-xs;
    }

  }
</style>