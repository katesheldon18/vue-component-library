<template>
  <div class="u-container u-bg-surface">
    <h1 class="u-text u-text">Heading</h1>
    <p class="u-text">Default text colour</p>
    <p class="u-text u-text-placeholder">Placeholder text</p>

    <div class="u-tile u-bg-primary u-text-primary">Primary background with primary text</div>
    <div class="u-tile u-bg-secondary u-text">Secondary background with default text</div>

    <button class="u-button u-button-primary">Primary Button</button>
    <button class="u-button u-button-secondary">Secondary Button</button>

    <div class="u-alert-success">This is a success alert</div>
    <div class="u-alert-info">This is an info alert</div>
    <div class="u-alert-warning">This is a warning alert</div>
    <div class="u-alert-error">This is an error alert</div>

    <input class="u-form-field" placeholder="Form field" />
  </div>
</template>

<style lang="scss">
@import '../styles/atoms.scss';
</style>
<script setup lang="ts">
</script>