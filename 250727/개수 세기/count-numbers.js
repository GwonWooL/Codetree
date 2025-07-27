const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let arr = input[0].split(" ").map(Number)
let n = arr[0], m = arr[1]
let num = input[1].split(" ").map(Number)
let count = 0

for(let i = 0; i<n; i++) {
    if(m == num[i] ) {
        count++
    }
}
console.log(count)