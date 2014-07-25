/**
 * Created by amitraj on 25/6/14.
 */
//A program to run grep command and search from bash_history
var spawn = require('child_process').spawn,
    grep    = spawn('grep', ['-ia', '^ll', '/home/amitraj/.bash_history']);

grep.stdout.on('data', function (data) {
    console.log('Output : ' + data );


});


grep.stderr.on('data', function (data) {
    console.log('Error: ' + data);
});


grep.on('close', function (code) {
    //console.log('Child process exited with code ' + code);
    if(code==0)
    console.log("Your pattern matches");
    else
    console.log("Your Pattern does not matches")

});