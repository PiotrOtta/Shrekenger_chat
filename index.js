// Pobierz wymagane moduły
const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

// Pobierz wymagane stałe
const { HeadersIncoming, HeadersInternal, HeadersOutcoming } = require('./headers');

// Zainicjuj serwer
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('The server is running at port %d', port);
});

// Upublicznij folder `public`
app.use(express.static(path.join(__dirname, 'public')));

// Użytkownicy online
const onlineUsers = new Map();

// Użytkownicy w pokojach
const usersInRooms = {
    room_1: new Set(),
    room_2: new Set(),
    room_3: new Set(),
    room_4: new Set(),
    room_5: new Set(),
};

// Gdy użytkownik się połączy do socketu
io.on(HeadersInternal.CONNECTION, socket => {
    const userId = socket.client.id;
    let selectedRoom = null;

    // Wyślij wiadomość do bieżącego pokoju
    function sendToRoom(header, body) {
        if (selectedRoom) {
            socket.to(`room_${selectedRoom}`).emit(header, body);
        }
    }

    function sendToMe(header, body) {
        socket.emit(header, body);
    }

    function getUserName(getUserId) {
        return onlineUsers.get(getUserId ?? userId);
    }

    function getAllUsersInRoom() {
        const usersInRoom = usersInRooms[`room_${selectedRoom}`];

        return usersInRoom && usersInRoom.size
            ? [...usersInRoom].map(userId => onlineUsers.get(userId))
            : [];
    }

    // Gdy użytkownik ustawia nick
    socket.on(HeadersIncoming.CHANGE_USERNAME, newUserName => {
        const userName = getUserName();

        if (selectedRoom) {
            if (userName) {
                sendToRoom(HeadersOutcoming.USER_LEFT, userName);
            }

            sendToRoom(HeadersOutcoming.USER_JOINED, newUserName);
        }

        onlineUsers.set(userId, newUserName);
    });

    // Gdy użytkownik połączy się z pokojem
    socket.on(HeadersIncoming.JOIN_ROOM, roomId => {
        // Opuść obecny pokój, jeśli już w jakimś jesteś
        if (selectedRoom) {
            socket.leave(selectedRoom);
            usersInRooms[`room_${selectedRoom}`].delete(userId);
            sendToRoom(HeadersOutcoming.USER_LEFT, getUserName());
        }

        // Dołącz do nowego pokoju
        selectedRoom = roomId;
        const usersOnline = getAllUsersInRoom();

        // Wyślij listę użytkowników online
        sendToMe(HeadersOutcoming.USERS_ONLINE, usersOnline);

        // Dołącz do nowego pokoju
        socket.join(`room_${selectedRoom}`);
        usersInRooms[`room_${selectedRoom}`].add(userId);
        sendToRoom(HeadersOutcoming.USER_JOINED, getUserName());
    });

    // Gdy użytkownik wyśle wiadomość
    socket.on(HeadersIncoming.SEND_MESSAGE, message => {
        sendToRoom(HeadersOutcoming.NEW_MESSAGE, {
            from: getUserName(),
            message,
        });
    });

    // Gdy użytkownik się rozłączy
    socket.on(HeadersInternal.DISCONNECT, () => {
        sendToRoom(HeadersOutcoming.USER_LEFT, getUserName());
<<<<<<< Updated upstream
=======
        usersInRooms[`room_${selectedRoom}`].delete(onlineUsers.get(userId));
>>>>>>> Stashed changes
        onlineUsers.delete(userId);
    });
});
