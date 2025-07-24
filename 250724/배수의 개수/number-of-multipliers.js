const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let count1 = 0, count2 = 0

for(let i = 0; i<10; i++) {
    if(input[i]%3==0) {
        count1++
    }
    if(input[i]%5==0) {
        count2++
    }
}
console.log(`${count1} ${count2}`)