/**
 * Created by amitraj on 25/6/14.
 */
//Running other javascript program as a child process

var execFile = require('child_process').exec,
    child;

child = execFile('/opt/node/node /home/amitraj/WebstormProjects/myTest/childprocess.js',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
       // console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });