import {Rooms} from "@/rooms";

export default {
    getActiveRoomName: state => Rooms.find(x => x.id === state.activeRoom)?.name,
    getActiveRoom: state => state.activeRoom,
    getUsersOnline: state => state.usersOnline,
    countUsersOnline: state => state.usersOnline?.length ?? 0,
    getUserName: state => state.nickName ?? "" ,
    getMessages: state => state.messages,
}