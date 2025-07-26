const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0, sum1 = 0

for(let i = 0; i<10; i++) {
    if((i+1)%2==0) {
        sum+=arr[i]
    }
    if((i+1)%3==0) {
        sum1+=arr[i]
    }
}
console.log(`${sum} ${(sum1/3).toFixed(1)}`)