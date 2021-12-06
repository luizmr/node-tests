const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'subFolder', 'text.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base); //text.txt

const absolute = path.resolve(__dirname, 'content', 'subFolder', 'text.txt');

console.log(absolute);
