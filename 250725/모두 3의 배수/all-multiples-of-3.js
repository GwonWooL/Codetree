const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let result = false

for(let i = 0; i<5; i++) {
    if(input[i]%3!=0) {
        result = true
    }
}

console.log(result==true ? 0:1)