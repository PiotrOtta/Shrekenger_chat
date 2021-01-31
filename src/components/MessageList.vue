<template>
  <div>
    <Message v-for="(message, key) in getMessages"
             :key = "key"
             :from="message.from"
<<<<<<< Updated upstream
             :message="message.message"/>
  </div>

<!--  <div class="incoming">-->
<!--    <div class="bubble">Siemka koluniu. Wypad z mojego bagna!</div>-->
<!--    <div class="bubble">Vivamus sit amet laoreet purus. Donec condimentum quam lorem, ac ornare leo varius et. Nam dapibus mollis mauris ut euismod. Aliquam finibus lobortis tellus, eu hendrerit tellus dapibus ultrices. Pellentesque ut pretium metus, et venenatis magna. Praesent nec nisl quis ante tristique facilisis vel sit amet lectus. In hac habitasse platea dictumst. Duis non orci quis libero elementum commodo. Pellentesque sed dictum justo. Etiam ipsum velit, consectetur in egestas ut, commodo sit amet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc urna eros, pellentesque nec purus nec, malesuada imperdiet lorem.</div>-->
<!--  </div>-->
<!--  <div class="outgoing">-->
<!--    <div class="test"><span class="bubble">Sponio.</span></div>-->
<!--    <div class="test"><span class="bubble">Ale jeszcze wpadne.</span></div>-->
<!--  </div>-->
<!--  <div class="incoming">-->
<!--    <div class="bubble">Tasdasd asd ad asdss.</div>-->
<!--  </div>-->
<!--  <div class="outgoing">-->
<!--    <div class="bubble">Vivamus sit amet laoreet purus. Donec condimentum quam lorem, ac ornare leo varius et. Nam dapibus mollis mauris ut euismod. Aliquam finibus lobortis tellus, eu hendrerit tellus dapibus ultrices. Pellentesque ut pretium metus, et venenatis magna. Praesent nec nisl quis ante tristique facilisis vel sit amet lectus. In hac habitasse platea dictumst. Duis non orci quis libero elementum commodo. Pellentesque sed dictum justo. Etiam ipsum velit, consectetur in egestas ut, commodo sit amet ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc urna eros, pellentesque nec purus nec, malesuada imperdiet lorem.</div>-->
<!--  </div>-->
<!--  <div class="typing">-->
<!--    <div class="bubble">-->
<!--      <div class="kulka pierwsza"></div>-->
<!--      <div class="kulka druga"></div>-->
<!--      <div class="kulka trzecia"></div>-->
<!--    </div>-->
<!--  </div>-->
=======
             :message="message.message"
    ></Message>
    <div style="width:100%;float: right" id="scrollDown"></div>
  </div>
>>>>>>> Stashed changes
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