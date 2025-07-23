const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let a = input[0]
let b = input[1]
let c = input[2]

let sum = a+b+c
let avg = sum/3

console.log(`${sum}\n${avg}\n${sum-avg}`)