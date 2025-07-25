const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let i = 0, sum = 0, count = 0

while(true) {
    if(input[i]>=30) {
        console.log((sum/i).toFixed(2))
        break
    }
    sum += input[i]
    i++
}