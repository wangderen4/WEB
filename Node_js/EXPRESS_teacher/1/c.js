const a = require('./a')
const b = require('./2/b')

//return
let sum = a.sum(1,1)
console.log(sum);


// callback
b.sum(1,2,function(err,result){
    console.log();
    
})
