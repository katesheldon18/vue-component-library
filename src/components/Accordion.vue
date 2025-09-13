<template>
  <div class="accordion" :class="{ 'is-open' : open }">
    <div @click="onClick" class="accordion__header">
      <svg class="accordion__icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
        <g>
          <rect class="bar-horizontal" x="0" y="5.5" width="12" height="1"></rect>
          <rect class="bar-vertical" x="5.5" y="0" width="1" height="12"></rect>
        </g>
      </svg>
      <div class="accordion__title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="accordion__wrapper" >
      <div class="accordion__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { onClick, open = false, } = defineProps<{ onClick?: (e: MouseEvent) => void; open: boolean; }>()
</script>


<style scoped lang="scss">
@import "../app/styles/variables.scss";

.accordion {
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-template-rows: auto 1fr;
  place-items: center start;
  margin: 0.5rem;
}

.accordion__header {
  display: contents;
  cursor: pointer;
}

.bar-vertical {
  transition: opacity 0.5s ease-in-out;
}

.is-open {
  .accordion__wrapper {
    grid-template-rows: 1fr;
  }

  .bar-vertical {
    opacity: 0;
  }
}

.accordion__title {
  grid-area: 1 / 2;
  font-size: $heading-sm;
  font-weight: $font-bold;
  color: $color-text;
}

.accordion__wrapper {
  display: grid;
  grid-area: 2 / 2;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s ease-in-out;
}

.accordion__content {
  overflow: hidden;
  font-size: $text-body;
  color: $color-primary-text;
  padding-top: 0.25rem;
}

</style>