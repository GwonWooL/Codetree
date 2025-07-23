const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let a = input[0]
let b = input[1]
let avg = (a+b)/2

console.log(a+b, avg.toFixed(1))