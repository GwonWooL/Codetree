const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let b = input[0], a=input[1]
let result=""

while(b>=a) {
    if(b%2==0) {
        result += (b+" ")
    }
    b--
}
console.log(result)
