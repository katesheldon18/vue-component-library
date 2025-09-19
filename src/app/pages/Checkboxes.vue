<template>
  <H1>Checkbox</H1>
  <Checkbox v-model="isChecked" />
  <div>{{isChecked}}</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Checkbox from "../../components/Checkbox.vue";

const isChecked = ref(false);

</script>