const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0], b = input[1], c = input[2]

if(b >= a && c >= a) {
    console.log(a)
}
else if(a >= b && c >=b) {
    console.log(b)
}
else if(a >= c && b >= c) {
    console.log(c)
}