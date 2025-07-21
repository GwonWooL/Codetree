const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let a = input[0]
let f= input[0].split(" ")
a = f[0]
let b = f[1]
let c = input[1]

console.log(a, b, c)