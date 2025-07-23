const fs = require("fs")
const input = fs.readFileSync(0).toString().split(" ").map(Number)
let a = input[0], b = input[1], c = input[2]
let max = Math.max(a, b, c)
console.log(max)