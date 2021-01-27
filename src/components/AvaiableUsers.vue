<template>
  <div class="cointainerOsoby d-none d-lg-block">
    <div class="profil">
      <div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
      <div class="name2">Shrek<p class="email text-wrap">Twoja nazwa</p></div>
    </div>
    <div class="dostepniUzytkownicy d-none d-sm-block">Dostępni użytkownicy</div>
    <ul class="ListaUzytkownikow">
      <li v-for="userName in getAvaiableUsers" class="user">
        <div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
        <span class="title">{{userName}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "AvaiableUsers",
  computed: {
    getAvaiableUsers() {
      return ["Bydle", "Ktoś inny", "Szmula", "Stara kuźmina"];
    }
  }
}

</script>

<style scoped>

</style>