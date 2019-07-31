const net = require('net');

/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: '192.168.88.218',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   // event handler to handle incoming data and console log it for the player.
//   conn.on('data', data => {
//         //conn.end();
//         //process.exit();   

//     console.log('data', data)
// })

//   return conn;
// }

// console.log('Connecting ...');
// connect();

const { connect } = require('./client');
console.log('Connecting ...');
connect();