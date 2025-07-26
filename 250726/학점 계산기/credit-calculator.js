const fs = require("fs")
let arr = fs.readFileSync(0).toString().split("\n")
let n = Number(arr[0])
let input = arr[1].split(" ").map(Number)
let sum = 0;

for(let i = 0; i<n; i++) {
    sum += input[i]
}
let avg = sum/n

if(avg>=4.0) {
    console.log(`${avg.toFixed(1)}\nPerfect`)
}
else if(avg>=3.0) {
    console.log(`${avg.toFixed(1)}\nGood`)
}
else {
    console.log(`${avg.toFixed(1)}\nPoor`)
}