const exec = require("child_process").exec;
const command = "git version";

exec(command, function (err, stdout) {
  if (err) {
    throw err;
  }
  
  console.log("Git Version Executed");
  console.log(stdout);
});
