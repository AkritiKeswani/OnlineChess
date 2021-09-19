const io = require('socket.io')();

io.on('connection', (client) => {
  // here you can start emitting events to the client
  console.log("Client Connection Made");
  console.log(client.handshake.headers.referer);
  // arguments are event and callback function
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log('Listening on Port ', port);
