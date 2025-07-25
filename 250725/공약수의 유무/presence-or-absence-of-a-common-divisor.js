const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let result = false

for(let i = input[0]; i<=input[1]; i++) {
    if(1920%i==0 && 2880%i==0) {
        result = true
    } 
}
console.log(result==true ? 1:0)
