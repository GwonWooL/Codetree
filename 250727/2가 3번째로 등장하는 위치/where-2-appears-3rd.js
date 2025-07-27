const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let n = Number(input[0])
let arr = input[1].split(" ").map(Number)
let count = 0

for(let i = 0; i<n; i++) {
    if(arr[i]==2) {
        count++
    }
    if(count==3) {
        console.log(i+1)
        break
    }
}