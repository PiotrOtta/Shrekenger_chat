<template>
  <div>
    <input v-model="message" @keyup="sendMessageByInput"
           type="text" placeholder="Wpisz wiadomość..." maxlength="400" />
    <button @click="sendMsg" class="buttonix" v-scroll-to="'#scrollDown'">
      <span>Wyślij</span>
      <div class="wave"></div>
    </button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import vscroll from "vue-scrollto";

export default {
  name: "MessageInput",
  data: () => ({
    message: null
  }),
  methods: {
    ...mapActions(["sendMessage"]),
    sendMsg() {
      if(this.message != null){
        this.sendMessage(this.message);
        this.message = null;
      }
    },
    sendMessageByInput({key, keyCode}) {
      if (key === 'Enter' || keyCode === 13) {
        vscroll.scrollTo('#scrollDown');
        this.sendMsg();
      }
    },
  }
}
</script>