const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // event handler to handle incoming data and console log it for the player.
  conn.on('data', data => {
        //conn.end();
        //process.exit();   

    console.log('data', data)

    //conn.write(data) if writing data it will create a loop and crash
})

// conn.on('connect', () => {
//   console.log('I connected!')
//   //conn.write('Hello world!')
// })

  return conn;
}



console.log('Connecting ...');
connect();