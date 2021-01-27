<template>
  <div class="container-fluid" id="app">
    <div class="card">
      <div class="content">
        <p>Najlepszy czat na bagnie!</p>
      </div>
      <img id="Shrekenger" alt="Shrekenger logo" src="./assets/Shrekenger.png">
    </div>
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
@import "styles/parallax_bg.scss";
@import "styles/CodilionChatBox.css";
@import "styles/CodilionWaveButton.css";
@import "styles/CodilionResponsiveCard.css";
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
