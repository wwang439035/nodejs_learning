const spawn = require("child_process").spawn;
const command = "node";
const params = ["./lib/actions"];
const childProcess = spawn(command, params);

childProcess.stdout.on("data", function(data) {
  console.log(`STDOUT: ${data.toString()}`);
});

childProcess.on("close", function() {
  console.log("Child Process has ended");
  process.exit();
});

setTimeout(function() {
  childProcess.stdin.write("stop");
}, 4000);