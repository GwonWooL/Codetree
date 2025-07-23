const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0], b = input[1], c = input[2]

let min = Math.min(a, b, c) 

let result1, result2

if(a == min) {
    result1 = 1
}
else {
    result1 = 0
}

if(a==b==c) {
    result2 = 1
}
else {
    result2 = 0
}

console.log(`${result1} ${result2}`)
