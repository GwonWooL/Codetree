const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let num = input[0]

for(let i = 1; i<=num; i++) {
    if(input[i]%2!=0 && input[i]%3==0) {
        console.log(input[i])
    }
}

