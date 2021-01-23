// Postawienie serwera express
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Serwer postawiony na porcie: %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

// Chatroom

let numUsers = 0;

io.on('connection', (socket) => {
  let addedUser = false;
  // kiedy klient wyemituje 'new message', ma nasłuchać i wykonać polecenie
  socket.on('new message', (data) => {
    // każemy klientowi wykonać 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // kiedy klient wyemituje 'add user', ma nasłuchać i wykonać polecenie
  socket.on('add user', (username) => {
    if (addedUser) return;

    // Przechowanie username
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // Poinformuj wszystkich o nowym członku
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // kiedy klient wyemituje 'typing', ma nasłuchać i wykonać polecenie
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // kiedy klient wyemituje 'stop typing', ma nasłuchać i wykonać polecenie
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // Wyświetlenie informacji o rozłączeniu przez użytkownika(nas)
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

      // Informowanie o rozłączeniu użytkownika czatu(innych)
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});
