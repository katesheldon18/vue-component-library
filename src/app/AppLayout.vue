<template>
  <div class="app-layout">
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/buttons">Buttons</router-link></li>
          <li><router-link to="/forms">Forms</router-link></li>
          <li><router-link to="/feedback">Feedback</router-link></li>
          <li><router-link to="/navigation">Navigation</router-link></li>
        </ul>
      </nav>
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f3f3f3;
  padding: 1rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
}
</style>