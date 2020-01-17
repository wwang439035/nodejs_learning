const fs = require("fs");
const file = `

Hello world

Happy new year

______________

Good morning

==============

`;

fs.writeFile("file.log", file.trim(), function(err) {
  console.log("File Created");
});