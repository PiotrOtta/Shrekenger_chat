<template>
  <div class="container-fluid" id="app">
    <div class="Container3D">
      <div class="Box3D">
        <img class="name" src="./assets/codilion.png">
        <img src="./assets/Shrekenger.png" class="Object3D"/>
      </div>
    </div>
    <div class="container d-flex">
      <DostepnePokoje/>
      <Shrekenger/>
      <DostepniUzytkownicy/>
    </div>
  </div>
</template>

<script>
import Shrekenger from './components/index.vue'
import {mapActions} from 'vuex';
import DostepnePokoje from './components/AvaiableRooms.vue'
import DostepniUzytkownicy from './components/AvaiableUsers.vue'
import VanillaTilt from 'vanilla-tilt'

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
  created() {
    this.initService();
  },
  mounted() {
    VanillaTilt.init(document.querySelectorAll(`.Box3D`), {
      max: 25,
      speed: 400
    });
  }
}
</script>


<style>
@import "styles/parallax_bg.scss";
@import "styles/CodilionChatBox.css";
@import "styles/CodilionWaveButton.css";
@import "styles/CodilionTilt.css";

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
