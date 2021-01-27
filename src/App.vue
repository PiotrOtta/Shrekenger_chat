<template>
  <div class="container-fluid" id="app">
    <img id="Shrekenger" class="img-fluid" alt="Shrekenger logo" src="./assets/Shrekenger.png">
    <div class="container d-flex">
      <DostepnePokoje/>
      <Shrekenger/>
      <DostepniUzytkownicy/>
    </div>
  </div>
</template>

<script>
import Shrekenger from './components/index.vue'
import { mapActions } from 'vuex';
import DostepnePokoje from './components/AvaiableRooms.vue'
import DostepniUzytkownicy from './components/AvaiableUsers.vue'

export default {
  name: 'App',
  components: {
    DostepnePokoje,
    Shrekenger,
    DostepniUzytkownicy
  },
  methods: {
    ...mapActions(["initService"])
  },
  created(){
    this.initService();
  }
}
</script>


<style>
@import "styles/parallax_bg.scss";
@import "styles/CodilionChatBox.css";
@import "styles/CodilionWaveButton.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
  padding-top: 20px;
  overflow-wrap: break-word;
}
@media only screen and (max-width: 575px) {
  #Shrekenger {
    max-height: 105px;
  }
}
</style>
