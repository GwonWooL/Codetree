const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0, avg = 0

for(let i = 0; i<8; i++) {
    sum += arr[i]
}
avg = sum/8
console.log(avg.toFixed(1))