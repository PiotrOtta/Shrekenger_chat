<template>
  <div class="profil">
    <div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
    <div class="name2">
      {{ getUserName }}
      <span @click="inputNickName" class="btn-link" style="cursor: pointer">
      Zmień nick
      </span>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "CurrentUser",
  computed: {
    ...mapGetters(["getUserName"]),
  },
  methods: {
    ...mapActions(['setNickName']),
    inputNickName(){
      const Nickname = prompt("Podaj nazwę");

      if(Nickname){
        this.attemptChangeNickname(Nickname);
        return;
      }
      this.inputNickName();
    },
    attemptChangeNickname(nickname) {
      setTimeout(() => {
        try {
          this.setNickName(nickname);
        } catch (e) {
          this.attemptChangeNickname(nickname);
        }
      }, 100);
    }
  },
  mounted(){
    this.inputNickName()
  }
}
</script>