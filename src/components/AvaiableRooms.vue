<template>
  <div class="containerPokoje d-sm-block">
    <div class="dostepnePokoje d-none d-sm-block">Dostępne pokoje</div>
    <ul class="ListaPokoje">
      <li
          v-for="room in rooms"
          :key="room.id"
          class="pokoj"
          :class="{focus:activeRoom === room.id}"
          @click="joinRoom(room.id)"
      >
        <span class="title d-none d-sm-block">{{ room.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {Rooms} from "@/rooms";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "AvaiableRooms",
  data: () => ({
    rooms: Rooms
  }),
  methods: {
    ...mapActions(["joinRoom"]),
    joinDefaultRoom() {
      setTimeout(() => {
        if (this.getUserName) {
          this.joinRoom(this.activeRoom);
        } else {
          this.joinDefaultRoom();
        }
      }, 100)
    }
  },
  computed: {
    ...mapGetters({activeRoom: "getActiveRoom", getUserName: "getUserName"})
  },
  mounted() {
    this.joinDefaultRoom();
  }
}
</script>