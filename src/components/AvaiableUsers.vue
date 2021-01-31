<template>
  <div class="cointainerOsoby d-none d-lg-block">
    <CurrentUser/>
    <div class="dostepniUzytkownicy">Dostępni użytkownicy {{ countUsersOnline }}</div>
    <ul class="ListaUzytkownikow">
      <li v-for="userName in getUsersOnline" class="user">
        <div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
        <span class="title">{{userName}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CurrentUser from '@/components/CurrentUser.vue'

export default {
name: "AvaiableUsers",
  components: {
    CurrentUser
  },
  computed: {
    ...mapGetters(["countUsersOnline", "getUsersOnline"])
  }
}

</script>

<style scoped>

</style>