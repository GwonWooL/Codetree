const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let result= 1

for(let i = input[0]; i<=input[1];i++) {
    result *= i
}
console.log(result)