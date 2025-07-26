const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let student = Number(input[0])
let count = 0

for(let i = 1; i<=student; i++) {
    let sum = 0
    let arr = input[i].split(" ").map(Number)
    for(let j = 0; j<4; j++) {
        sum += arr[j]
    }
    if((sum/4)>=60) {
        console.log("pass")
        count++
    }
    else {
        console.log("fail")
    }
}
console.log(count)

