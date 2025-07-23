const os = require('os');
const osinfo  =  {
    name: os.type(),
    realeaseDate : os.release(),
    totalmemory : os.totalmem(),
    freememory : os.freemem()
}

console.log(osinfo);