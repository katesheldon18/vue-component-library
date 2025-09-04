<template>
  <div class="app-layout">
    <aside class="sidebar">
      <nav>
        <ul>
          <li class="sidebar__link"><router-link to="/">Home</router-link></li>
          <li class="sidebar__link"><router-link to="/buttons">Buttons</router-link></li>
          <li class="sidebar__link"><router-link to="/notes">Notes</router-link></li>
          <li class="sidebar__link"><router-link to="/toasts">Toasts</router-link></li>
          <li class="sidebar__link"><router-link to="/atoms">Style Guide</router-link></li>
        </ul>
      </nav>
    </aside>
    <main>
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
  width: 12.5rem;
  background-color: #f3f3f3;
  padding: 2rem 1rem;
}

.sidebar__link {
  margin: 0.5rem 0;
  text-decoration: none;
}

main {
  flex: 1;
  padding: 2rem;
}
</style>