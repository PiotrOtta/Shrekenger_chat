<template>
  <div class="container-fluid" id="app">
    <img id="Shrekenger" alt="Shrekenger logo" src="./assets/Shrekenger.png">
    <Shrekenger msg="Shrekenger"/>
  </div>
</template>

<script>
import Shrekenger from './components/index.vue'

export default {
  name: 'App',
  components: {
    Shrekenger
  }
}
</script>

<style>
html {
  margin: 0 auto;
  height: auto;
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
  background: linear-gradient(120deg, #2effbc, #4bbb1d);
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  padding-top: 20px;
  overflow-wrap: break-word;
}
</style>
