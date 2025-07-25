const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let result = 1

for(let i = 1; i<=input[1]; i++) {
    if(i%input[0]==0) {
        result *= i
    }
}
console.log(result)