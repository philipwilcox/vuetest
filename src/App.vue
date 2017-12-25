<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- So because I'm using vue-router here, this dynamically imports a component based on what's in src/router/index.js
    somehow...? -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
