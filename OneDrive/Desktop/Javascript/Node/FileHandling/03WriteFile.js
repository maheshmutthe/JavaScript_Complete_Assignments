const  fs  =  require('fs');
fs.writeFile('newfile3.txt', 'Hello content!', function(err) {
    if  (err)  throw  err;  
    console.log('Saved!');
});