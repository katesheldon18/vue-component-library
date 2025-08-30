<template>
  <h1>Toasts</h1>
  <div class="examples">
    <Toast>
      <template #message>Default Toast</template>
      <template #subtext>Optional Subtext</template>
    </Toast>
    <Toast variant="success">
      <template #message>Success Toast</template>
    </Toast>
    <Toast variant="warning">
      <template #message>Warning Toast</template>
    </Toast>
    <Toast variant="error">
      <template #message>Error Toast</template>
    </Toast>
  </div>

  <Button @click="showToast">Show me a Toast!</Button>

  <Toast v-if="currentToast" v-bind="currentToast" @dismiss="dismissToast">
    <template #message>Toast Positioning</template>
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

.examples {
  .toast {
    position: static;
  }
}

</style>