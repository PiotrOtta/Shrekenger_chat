<template>
  <div id="app">
    <img id="Shrekenger" alt="Shrekenger logo" src="./assets/Logo_Shrekenger_gradient.png">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app #Shrekenger {
  width: 10%;
}
footer {
  padding-top: 20px;
}
</style>
