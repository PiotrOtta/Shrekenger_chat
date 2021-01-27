import {Rooms} from "@/rooms";

export default {
    getActiveRoomName: state => Rooms.find(x => x.id === state.activeRoom)?.name,
    getActiveRoom: state => state.activeRoom
}