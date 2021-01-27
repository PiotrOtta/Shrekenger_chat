export default {
    SET_NICKNAME(state, nick){
        state.nickName = nick;
    },
    SET_ACTIVE_ROOM(state, roomID){
        state.activeRoom = roomID;
    }
}