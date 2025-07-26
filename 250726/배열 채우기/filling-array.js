const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let num = []

for(let i = 0; i<10; i++) {
    if(arr[i]==0) {
        break
    }
    num[i] = arr[i]
}

console.log(num.reverse().join(" "))