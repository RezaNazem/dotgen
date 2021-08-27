const { spawn } = require("child_process");
const chalk = require('chalk');
var bat = require.resolve("../bat/rest.bat");

function createProject(param) {
  if (param.type == "rest") {
    restApi(param);    
  }
}

function restApi(param) {
  var ls = spawn(bat,[param.slnName,param.path]);
  
  ls.stdout.on("data", function (data) {
    console.log( chalk.green( "[info]: ") + data);
  });

  ls.stderr.on("data", function (data) {
    console.log(chalk.red( "[Error]: ") + data);
    return process.exit(1);
  });

  ls.on("exit", function (code) {
    console.log("child process exited with code " + code);
  });
}

module.exports = { createProject };
