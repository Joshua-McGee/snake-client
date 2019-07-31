const net = require('net');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();

//   // uses a callback to kill the process
//   process.stdin.on('data', handleUserInput);
 
//   return stdin;
// }

// // a function that checks if you have hit control + c to exit the line
// const handleUserInput = function(stdin) {
//   if (stdin === '\u0003'){
//     process.exit();
//   }
// };
const { setupInput } = require('./input');
const { connect } = require('./client');

console.log('Connecting ...');
connect();

setupInput();