import io from 'socket.io-client';

export default class SocketService {
    constructor(store) {
        this.store = store;
        //zmienić local hosta tam gdzie będzie hostowane
        this.io = io('http://localhost:3000');
        this.io.on("connect", () => {
            this.initialized = true;

            this.io.on("received message", ({from, message}) => {
                this.store.dispatch("addMessage", from, message);
            });
        });
    }

    //header to identyfikator do wysłania na serwer - typu string
    send(header, message) {
        if (!this.initialized) {
            throw new Error("Połączenie nie zostało nawiązane.");
        }
        this.io.emit(header, message);
    }

    sendMessage(from, message) {
        this.send("sendMessage", {from, message});
    }

    setNickName(nickName) {
        this.io.emit(nickName);
    }
}