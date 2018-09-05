const fs = require('fs');
const aglio = require('aglio');
const path = require('path');

const inputFileDir = 'api-documentation/';
const outputFileDir = 'dist/';

var blueApiOptions = {
    themeVariables:'Streak' //Flatly, Slate,Default
}
//keep a watch on changes for the files
fs.watch('api-documentation',(eventType,file) => {

    //get the name of the file
    var outputFile = path.basename(file,'apib') + 'html';

    //configure path to read and write the file at.
    var filepathToRead = path.join(inputFileDir, file);
    var filepathToWrite = path.join(outputFileDir, outputFile);    

    //diagnostics for testing
    //console.log('reading file from: ' + filepathToRead);
    //console.log('writing file to: ' + filepathToWrite);  

    //create the api documentation files.
    aglio.renderFile(filepathToRead,filepathToWrite,blueApiOptions,(err,warning) => {
          if(err) console.log(err);
          if(warning) console.log(warning);
    })  
});