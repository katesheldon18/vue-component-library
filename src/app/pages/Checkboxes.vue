<template>
  <H1>Checkbox</H1>
  <div class="spacing">
    <Checkbox v-model="isChecked1" label="Checkbox - default" />
    <div class="spacing">Checked: {{isChecked1}}</div>
      <Checkbox v-model="isChecked2" label="Checkbox with custom checkmark (svg slot)" class="checkbox-example">
        <template #checkmark>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#276014" stroke-width="20" stroke-linecap="round" stroke-linejoin="round">
            <path d="M30 120 C 90 250, 80 60, 210 0" />
          </svg>
        </template>
      </Checkbox>
    <div class="spacing">Checked: {{isChecked2}}</div>
      <Checkbox v-model="isChecked3" label="Checkbox - checked by default"/>
    <div class="spacing">Checked: {{isChecked3}}</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Checkbox from "../../components/Checkbox.vue";
const isChecked1 = ref(false);
const isChecked2 = ref(false);
const isChecked3 = ref(true);
</script>

<style lang="scss">
@import "../styles/variables.scss";

.spacing {
  margin: 1rem 0;
}

.checkbox-example {
  .checkbox__input {
    border: 1px solid $color-success-border;
  }

  .checkbox__input:checked {
    background: none;
  }
}
</style>