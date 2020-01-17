const fs = require("fs");
const path = require("path");

fs.readdir("./", function(err, files) {
  files.forEach(function(fileName) {
    const file = path.join(__dirname, fileName);
    const stats = fs.statSync(file);
    if(stats.isFile() && fileName !== ".DS_Store") {
      fs.readFile(file, "UTF-8", function(err, contents) {
        console.log(contents);
      });
    }
  });
});