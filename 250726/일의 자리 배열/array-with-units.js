const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let num = [10]
num[0] = arr[0], num[1] = arr[1]

for(let i = 2; i<10; i++) {
    num[i] = (num[i-2]+num[i-1])%10
}

console.log(num.join(" "))