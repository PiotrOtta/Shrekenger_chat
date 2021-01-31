export default {
    SET_NICKNAME(state, nick){
        state.nickName = nick;
    },
    SET_ACTIVE_ROOM(state, roomID){
        state.activeRoom = roomID;
    },
    CLEAR_MESSAGES(state) {
        state.messages = [];
    },
    ADD_MESSAGE(state, messageObject){
        state.messages.push(messageObject);
    },
    ADD_USER(state, userName){
        state.usersOnline.push(userName);
    },
    DELETE_USER(state, userName){
        state.usersOnline = state.usersOnline.filter(u => u !== userName);
    },
    SET_USERS_ONLINE(state, usersOnline){
        state.usersOnline = usersOnline;
    }
}