const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")

let numA = input[0].split(" ").map(Number)
let aMath = numA[0]
let aEng = numA[1]

let numB = input[1].split(" ").map(Number)
let bMath = numB[0]
let bEng = numB[1]

console.log(aMath > bMath ? 1:0)
