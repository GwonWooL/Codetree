const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0], b = input[1], c = input[2]

if(b > a && b < c) {
    console.log(1)
}
else {
    console.log(0)
}