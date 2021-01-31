<template>
  <div>
    <Message v-for="(message, key) in getMessages"
             :key = "key"
             :from="message.from"
             :message="message.message"
    />
    <div style="width:100%;float: right" id="scrollDown"></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Message from '@/components/Message'

export default {
name: "MessageList",
  components: {
  Message
  },
  computed: {
  ...mapGetters(["getMessages"]),
  },
  watch: {
  getMessages() {
    this.$forceUpdate();
  }
  }
}
</script>