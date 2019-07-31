const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.write('Name: JM');
  // event handler to handle incoming data and console log it for the player.
  conn.on('data', data => { 
    console.log("i connected to server");
    
    console.log('data', data)
})

  return conn;
}

// export it as an object
module.exports = { 
  connect
};