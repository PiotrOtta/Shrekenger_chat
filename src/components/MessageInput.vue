<template>
  <div>
    <input v-model="message" @keyup="sendMessageByInput"
           type="text" placeholder="Wpisz wiadomość..."/>
    <button @click="sendMsg" class="buttonix">
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