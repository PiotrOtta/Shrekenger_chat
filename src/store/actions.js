import SocketService from "@/services/SocketService";

let socketService = null;

export default {
    //destrukturyzacja
    initService({state}) {
        if (!state.isInitialized) {
            socketService = new SocketService(this);
        }
    },
    sendMessage(store, message) {
        store.commit("ADD_MESSAGE", {from:store.state.nickName, message});
        socketService.sendMessage(message);
    },
    setNickName(store, nickName) {
        store.commit("SET_NICKNAME", nickName);
        socketService.setNickName(nickName);
    },
    joinRoom(store, roomId) {
        store.commit("SET_ACTIVE_ROOM", roomId);
        store.commit("CLEAR_MESSAGES");
        socketService.joinRoom(roomId);
    },
}