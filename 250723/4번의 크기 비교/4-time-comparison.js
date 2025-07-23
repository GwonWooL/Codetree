const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let a= Number(input[0])

let num = input[1].split(" ").map(Number)
let b = num[0]
let c = num[1]
let d = num[2]
let e = num[3]

console.log(a > b ? 1:0)
console.log(a > c ? 1:0)
console.log(a > d ? 1:0)
console.log(a > e ? 1:0)
