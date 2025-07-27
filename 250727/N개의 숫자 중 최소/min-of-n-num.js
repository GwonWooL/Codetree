const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let n = Number(input[0])
let arr = input[1].split(" ").map(Number)
let count = 0, min = arr[0]

for(let i = 1; i<n; i++) {
    if(min > arr[i]) {
        min = arr[i]
    }
}
for(let i = 0; i<n; i++) {
    if(min == arr[i]) {
        count++
    }
}
console.log(`${min} ${count}`)