<template>
  <header class="header">
    <router-link class="router-link" to="/">
      <h1>Users</h1>
    </router-link>
  </header>
  <router-view />
</template>

<script setup></script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.router-link {
  color: #fff;
  text-decoration: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
