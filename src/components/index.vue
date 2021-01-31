<style>
#tooltip {
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
}
</style>
<template>
  <div class="chatbox">
    <div class="GornyPasek">
      <div class="avatar"><img src="../assets/Logo_Shrekenger_gradient.png"/></div>
      <div class="name">{{ getActiveRoomName }}</div>
      <span class="badge d-lg-none">{{ countUsersOnline }} użytkowników</span>
    </div>
    <div class="middle">
      <MessageList/>
    </div>
    <div class="bottom-bar">
      <MessageInput/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';

export default {
  components: {
    MessageInput,
    MessageList
  },
  computed: {
    ...mapGetters(["getActiveRoomName"]),
    ...mapGetters(["countUsersOnline"])
  }
}

</script>
