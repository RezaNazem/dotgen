const { spawn } = require("child_process");
var bat = require.resolve("../bat/rest.bat");

function createProject(param) {
  if (param.type == "rest") {
    restApi(param);
  }
}

function restApi(param) {
  var ls = spawn(bat,[param.slnName,param.path]);
  
  ls.stdout.on("data", function (data) {
    console.log("stdout: " + data);
  });

  ls.stderr.on("data", function (data) {
    console.log("stderr: " + data);
  });

  ls.on("exit", function (code) {
    console.log("child process exited with code " + code);
  });
}

module.exports = { createProject };
