const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  console.log("i connected to server");
  conn.write('Name: JM');
  //conn.write('Move: up');
  
  setInterval(() => {
    //conn.write('Move: left');
  }, 50)

  // event handler to handle incoming data and console log it for the player.
  conn.on('data', data => { 
    console.log('data', data)
})

  return conn;
}

// export it as an object
module.exports = { 
  connect
};