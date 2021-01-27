import SocketService from "@/services/SocketService";

let socketService = null;

export default {
    //destrukturyzacja
    initService({state}){
        if(!state.isInitialized){
            socketService = new SocketService(this);
        }
    },
    addMessage({state}, from, message){
        state.messages.push({from, message});
    },
    sendMessage({state}, message){
        socketService.sendMessage(state.nickName, message);
    }
}
