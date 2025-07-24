const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let a = input[0], b = input[1]
let result = (a+" ")

while(a<=b) {
    if(a%2 != 0) {
        a *= 2
    }
    else {
        a+=3
    }
    if(a>b) {
        break
    }
    result += (a+" ")
}

console.log(result)