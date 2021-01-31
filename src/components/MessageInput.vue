<template>
  <div>
    <input v-model="message" @keyup="sendMessageByInput"
           type="text" placeholder="Wpisz wiadomość..."/>
<<<<<<< Updated upstream
    <button @click="sendMsg" class="buttonix">
=======
    <button @click="sendMsg" class="buttonix" v-scroll-to="'#scrollDown'">
>>>>>>> Stashed changes
      <span>Wyślij</span>
      <div class="wave"></div>
    </button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "MessageInput",
  data: () => ({
    message: null
  }),
  methods: {
    ...mapActions(["sendMessage"]),
    sendMsg() {
      this.sendMessage(this.message);
      this.message = null;
    },
    sendMessageByInput({key, keyCode}) {
      if (key === 'Enter' || keyCode === 13) {
        this.sendMsg();
      }
    },
  }
}
</script>