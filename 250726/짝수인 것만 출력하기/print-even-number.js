const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")
let n = arr[0]
let num = arr[1].split(" ").map(Number)
let number = []

for(let i = 0; i<n; i++) {
    if(num[i]%2==0) {
        number.push(num[i])
    }
}
console.log(number.join(" "))