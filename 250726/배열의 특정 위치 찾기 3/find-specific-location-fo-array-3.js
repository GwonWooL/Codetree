const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0

for(let i = 0; i<arr.length; i++) {
    if(arr[i]==0) {
        sum = arr[i-3]+arr[i-2]+arr[i-1]
        break
    }
}
console.log(sum)