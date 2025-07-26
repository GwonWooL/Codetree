const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0

for(let i = 0; i<10; i++) {
    sum += input[i]
}
console.log(sum)