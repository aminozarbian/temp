const {readFile , writeFile} = require('fs');

readFile('./content/file1.txt',{encoding:'utf-8'} ,(err,result)=>{
if(err){
    console.log(err);
    return
}
console.log(result);
})


writeFile('./content/file1.txt',' add send to this' , {flag:'a'} ,  (err)=>{
    if(err){
        console.log(err)
        return
    }
})
