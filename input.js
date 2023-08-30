const { 
  CTRL_C,
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  HELLO_KEY,
  BYE_KEY } = require("./constants");

// Stores the active TCP connection object.
let connection;

const handleUserInput = function (data) {
  if (data === CTRL_C) {
    process.exit();
  }
  if (data === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (data === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (data === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (data === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (data === HELLO_KEY) {
    connection.write("Say: Hello!");
  } else if (data === BYE_KEY) {
    connection.write("Say: Bye!");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};