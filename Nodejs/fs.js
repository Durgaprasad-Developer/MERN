const fs = require('fs');
// Read File


console.log("start");

let f1Data = fs.readFileSync('f1.txt');
console.log(""+f1Data);

let f1DataAsync = fs.readFile('f2.txt',function(err,data){ //error-first callback
    if(err){
        console.error(err)
    }else{
        console.log(""+data);
    }
});
console.log("end");

// update

fs.appendFileSync('f3.txt', 'Node js course', 'utf8');
let f2DataAsync = fs.readFile('f3.txt', function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(""+data);
    }
})

fs.writeFileSync('f4.txt', 'I am f4 data', 'utf8');
fs.writeFile('f5.txt', 'I am f5 data', 'utf8', function(err){
    if(err){
        console.error(err);
    }
})

