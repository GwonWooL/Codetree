const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let c = input[0]
let a = Number(input[1])
let b = Number(input[2])
console.log(`${c}\n${a.toFixed(2)}\n${b.toFixed(2)}`)