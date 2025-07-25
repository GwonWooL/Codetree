const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let i = 0, sum = 0

while(true) {
    if(input[i]>=20&&input[i]<=29) {
        sum += input[i]
        i++
    }
    else {
        console.log((sum/i).toFixed(2))
        break
    }
    
    
}