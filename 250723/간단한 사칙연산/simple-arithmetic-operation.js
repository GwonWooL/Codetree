const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ")
let a = Number(input[0])
let b = Number(input[1])
console.log(`${a+b}\n${a-b}\n${parseInt(a/b)}\n${a%b}`)