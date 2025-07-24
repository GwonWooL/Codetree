const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0], b = input[1]
let result = ""

for(let i = b; i>=a; i--) {
    result += (i+" ")
}
console.log(result)