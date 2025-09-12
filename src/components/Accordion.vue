<template>
  <div @click="onClick" class="accordion ">
    <div class="accordion__icon">+</div>
    <div class="accordion__title">Question</div>
    <div :class="['accordion__wrapper', { 'is-open' : open }]" >
      <div class="accordion__content">Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { onClick, open = false, } = defineProps<{ onClick?: (e: MouseEvent) => void; open: boolean; }>()
</script>


<style scoped>

.accordion {
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: auto 1fr;
  place-items: center start;
}

.accordion__icon {
  grid-area: 1 / 1;
}

.accordion__title {
  grid-area: 1 / 2;

}

.accordion__wrapper {
  display: grid;
  grid-area: 2 / 2;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-in-out;
}

.accordion__wrapper.is-open {
  grid-template-rows: 1fr;
}

.accordion__content {
  overflow: hidden;
}

</style>