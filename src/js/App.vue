<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
window._ = require('lodash');
export default {
  name: 'app'
};

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background: rgb(240, 240, 240)
}

</style>
