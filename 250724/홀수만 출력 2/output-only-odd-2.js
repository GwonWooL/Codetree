const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let b = input[0]
let a = input[1]
let result = ""

for(let i = b; i>=a; i--) {
    if(i%2!=0) {
        result += (i+" ")
    }
}
console.log(result)