const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = Number(input[0]), arr = []
arr = input[1].split(" ").map(Number)
let arr01 = []

for(let i = 0; i<n; i++) {
    if(arr[i]%2==0) {
        arr01.push(arr[i])
    }
}

console.log(arr01.reverse().join(" "))