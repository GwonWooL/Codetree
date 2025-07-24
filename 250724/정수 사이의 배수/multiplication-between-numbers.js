const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0, count = 0

for(let i = input[0]; i<=input[1]; i++) {
    if(i%5==0 ||i%7==0) {
        sum += i
        count++
    }
    
}
let avg = sum/count
console.log(`${sum} ${avg.toFixed(1)}`)