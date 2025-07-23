const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0]
let b = input[1]
let c = input[2]

let avg = parseInt((a+b+c)/3)

console.log(`${a+b+c}\n${avg}`)