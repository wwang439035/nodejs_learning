const path = require("path");
const util = require('util');
const v8 = require('v8');

util.log(path.basename(__filename));

const dirUploads2 = path.join(__dirname, 'coreModule.js');
util.log(dirUploads2);

const dirUploads1 = path.join(__dirname, 'wwww', 'files', 'uploads');
console.log(dirUploads1 + '\n');

util.log(v8.getHeapStatistics());
