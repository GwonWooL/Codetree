const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let number = [arr[0], arr[1]]

for(let i = 2; i<10; i++) {
    number[i] = number[i-1]+2*number[i-2]
}
console.log(number.join(" "))