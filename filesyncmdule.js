const {readFileSync , writeFileSync} = require('fs');
// const path = require('path')
// const filePath =  path.resolve(__dirname,'content' , 'file1.txt');

const b = readFileSync('./content/file2.txt' , 'utf8');

writeFileSync('./content/file3.txt' ,'add this to it' , {flag:'a'});
const a = readFileSync('./content/file1.txt' , 'utf8');
console.log(a);
console.log(b);
