const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let sum = 0, avg = 0, count = 0

for(let i = 0; i<10; i++) {
    if(input[i]>=0 && input[i]<=200) {
        sum += input[i]
        count++
    }
}
avg = sum/count   
console.log(`${sum} ${avg.toFixed(1)}`)