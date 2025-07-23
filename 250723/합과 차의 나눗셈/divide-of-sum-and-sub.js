const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0]
let b = input[1]
let result = (a+b)/(a-b)

console.log(result.toFixed(2))