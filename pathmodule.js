const path = require('path');
const joinedpath  = path.join('/content', 'texts' , 'doc.txt')
console.log(joinedpath);

const fileName = path.basename(joinedpath);
console.log(fileName);

const obsolutePath = path.resolve(__dirname, '/content', 'texts' , 'doc.txt');
console.log(obsolutePath)