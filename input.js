let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // uses a callback to kill the process
  process.stdin.on('data', handleUserInput);
 
  return stdin;
}

// a function that checks if you have hit control + c to exit the line
const handleUserInput = function(stdin) {
  if (stdin === '\u0003'){
    process.exit();
  }
  if (stdin === 'w'){
    //console.log('up');
    connection.write('Move: up');
  }
  if (stdin === 'a'){
    //console.log('left');
    connection.write('Move: left');
  }
  if (stdin === 'd'){
    //console.log('right');
    connection.write('Move: right');
  }
  if (stdin === 's'){
    //console.log('down');
    connection.write('Move: down');
  }
  if (stdin === 'p'){
    //console.log('down');
    connection.write('Say: byebye loser');
  }
  if (stdin === 'o'){
    //console.log('down');
    connection.write('Say: ???');
  }
};

module.exports = {
  setupInput
};