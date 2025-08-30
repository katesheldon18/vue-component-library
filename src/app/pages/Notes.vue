<template>
  <h1>Notes</h1>
  <div>
    <Note>
      Note (Primary)
    </Note>
  </div>
  <div>
    <Note variant="secondary">
      Note (Secondary)
    </Note>
  </div>
  <div>
    <Note title="Note">
      Note with title and body text
    </Note>
  </div>

</template>

<script setup lang="ts">
import Note from "../../components/Note.vue";
</script>

<style scoped lang="scss">
  div {
    margin: 1rem 0;
  }
</style>