const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

let a = input[0], b=input[1]
let result = ""

while(a<=b) {
    if(a%2==0) {
        result+=(a+ " ")
    }
    a++
}
console.log(result)