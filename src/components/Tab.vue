<template>
  <div id="app">
    <router-link to="/ess">Essential Links</router-link>
    <router-link to="/eco">Ecosystem</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
