<template>
  <div class="u-surface u-text u-border" style="padding: 2rem;">
    <h1 class="u-text">Style Guide</h1>
    <p class="u-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod.</p>

    <div class="u-bg-primary" style="padding: 1rem; margin-top: 1rem;">
      <h2 class="u-text-secondary">Getting Started</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dui.</p>
    </div>

    <div class="u-bg-secondary" style="padding: 1rem; margin-top: 1rem;">
      <h2 class="u-text">Components</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit.</p>
    </div>

    <div class="u-border" style="padding: 1rem; margin-top: 1rem;">
      <h2 class="u-color-primary">Theming</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lacus.</p>
    </div>

    <div>
      <div class="u-alert-success">Success! Your action was completed.</div>
      <div class="u-alert-info">Heads up! Here’s some helpful information.</div>
      <div class="u-alert-warning">Warning! Check this before continuing.</div>
      <div class="u-alert-error">Error! Something went wrong.</div>
    </div>

    <div style="margin-top: 2rem;">
      <h2 class="u-text">Buttons</h2>
      <button class="u-btn-primary">Primary Button</button>
      <button class="u-btn-secondary" style="margin-left: 1rem;">Secondary Button</button>
    </div>

    <div style="margin-top: 2rem;">
      <h2 class="u-text">Form Fields</h2>
      <div class="u-form-field">
        <label class="u-label" for="name">Name</label>
        <input class="u-input" id="name" type="text" placeholder="Enter your name" />
      </div>
      <div class="u-form-field">
        <label class="u-label" for="email">Email</label>
        <input class="u-input" id="email" type="email" placeholder="Enter your email" />
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">
import '../styles/variables.scss';
</script>

<style scoped>
</style>