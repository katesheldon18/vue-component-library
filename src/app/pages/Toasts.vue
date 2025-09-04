<template>
  <h1>Toasts</h1>
  <div>
    <Button @click="showToast('info', 'Informational Toast')">Show me an Info (Default) Toast!</Button>
  </div>
  <div>
    <Button @click="showToast('success', 'Successful Toast')" variant="secondary">Show me a Success Toast!</Button>
  </div>
  <div>
    <Button @click="showToast('warning', 'Warning Toast with Looooong Duration', 12000)">Show me a Warning Toast!</Button>
  </div>
  <div>
    <Button @click="showToast('error', 'OH NO!')" variant="secondary">Show me an Error Toast!</Button>
  </div>
  <div>
    <Button @click="showToast('info', 'Toast Title', undefined, 'Here\'s a little something extra')">Toast can also have subtext</Button>
  </div>

  <div>
    <div class="notification-container">
      <Toast
          v-for="(toast, index) in [...toasts].reverse()"
          :key="toast.id"
          v-bind="toast"
          :index="index"
          @dismiss="() => dismissToast(toast)"
      />
    </div>
  </div>

</template>

<script setup lang="ts">
  import Toast from '../../components/Toast.vue'
  import Button from '../../components/Button.vue'
  import { useToast } from '../../composables/useToast'

  const { toasts, showToast, dismissToast } = useToast()
</script>

<style scoped lang="scss">
button {
  margin: 0.5rem 0;
}
.notification-container {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}
</style>