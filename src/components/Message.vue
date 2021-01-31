<template>
  <div :class="{incoming: !mine, outgoing: mine}">
    <div class="bubble">
      <p class="text-success bg-white p-1 rounded">{{ from }}</p>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Message",
  props: {
    from: {
      required: true,
      type: String
    },
    message: {
      required: true,
      type: String
    }
  },
  computed: {
    ...mapGetters(["getUserName"]),
    mine() {
      return this.getUserName === this.from;
    }
  }
}
</script>