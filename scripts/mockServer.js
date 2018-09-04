var drakov = require('drakov');

var argv = {
    sourceFiles: '../api-documentation/*.apib',
    serverPort: 3000,
};

drakov.run(argv, function(){
    // started Drakov
    drakov.stop(function() {
        // stopped Drakov
    });
});