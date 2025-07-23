const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let a = input[0]
a += 87
let b = input[1]
b %=10

console.log(a)
console.log(b)