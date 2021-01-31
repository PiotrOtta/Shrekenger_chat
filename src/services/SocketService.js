import io from 'socket.io-client';
import { IncomingHeaders, InternalHeaders, OutcomingHeaders } from '../consts/headers';

export default class SocketService {
    constructor(store) {
        this.io = io();
        this.io.on(InternalHeaders.CONNECT, () => {
            this.setupEventListeners(store);
            this.initialized = true;
        });
    }
    //tutaj są wszystkie zdarzenia ktore przychodzą a backendu
    setupEventListeners(store) {
        this.io.on(IncomingHeaders.NEW_MESSAGE, (messageObj) => {
            store.commit('ADD_MESSAGE', messageObj);
        });

        this.io.on(IncomingHeaders.USER_LEFT, (user) => {
            store.commit('DELETE_USER', user);
        });

        this.io.on(IncomingHeaders.USER_JOINED, (user) => {
            store.commit('ADD_USER', user);
        });

        this.io.on(IncomingHeaders.USERS_ONLINE, (usersOnline) => {
            store.commit('SET_USERS_ONLINE', usersOnline);
        });
    }

    //header to identyfikator do wysłania na serwer - typu string
    send(header, message) {
        if (!this.initialized) {
            throw new Error("Połączenie nie zostało nawiązane.");
        }
        this.io.emit(header, message);
    }

    sendMessage(message) {
        this.send(OutcomingHeaders.SEND_MESSAGE, message);
    }

    setNickName(nickName) {
        this.send(OutcomingHeaders.CHANGE_USERNAME, nickName);
    }
    //array splice
    joinRoom(roomId) {
        this.send(OutcomingHeaders.JOIN_ROOM, roomId);
    }
}