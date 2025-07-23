const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ")
let a = Number(input[0])
let b = Number(input[1])

a += 8
b *= 3

console.log(`${a}\n${b}\n${a*b}`)