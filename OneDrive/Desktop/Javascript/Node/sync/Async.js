var fs = require("fs");

fs.readFile('sync/input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended"); // it will display first due to nonblocking time needs to read file