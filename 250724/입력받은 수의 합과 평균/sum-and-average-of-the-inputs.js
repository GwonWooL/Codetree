const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let n = input[0]
let sum = 0;

for(let i = 1; i<=n; i++) {
    sum += input[i]
}
let avg = sum/(n)

console.log(`${sum} ${avg.toFixed(1)}`)