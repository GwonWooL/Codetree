const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0]
let b = input[1]

let max = a>b ? a : b

console.log(max)