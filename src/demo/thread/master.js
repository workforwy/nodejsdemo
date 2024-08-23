import fs from 'fs';
import { exec } from 'child_process';

for (var i = 0; i < 3; i++) {
  var workerProcess = exec(
    `node ./src/demo/thread/support.js ` + i,
    function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack);
        console.log('Error code: ' + error.code);
        console.log('Signal received: ' + error.signal);
      }
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
    },
  );

  workerProcess.on('exit', function (code) {
    console.log('子进程已退出，退出码 ' + code);
  });
}
