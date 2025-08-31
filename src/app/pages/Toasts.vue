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

  <Toast v-if="currentToast" v-bind="currentToast" @dismiss="dismissToast">

  </Toast>
</template>

<script setup lang="ts">
  import Toast from '../../components/Toast.vue'
  import Button from '../../components/Button.vue'
  import { useToast } from '../../composables/useToast'

  const { currentToast, showToast, dismissToast } = useToast()
</script>

<style scoped lang="scss">
div {
  margin: 1rem 0;
}
</style>