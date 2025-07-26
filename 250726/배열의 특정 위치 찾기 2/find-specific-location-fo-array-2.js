const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let sum1 = 0, sum2 = 0

for(let i = 0; i<10; i++) {
    if((i+1)%2==0) {
        sum2+=arr[i]
    }
    else {
        sum1+=arr[i]
    }
}
console.log(sum1>sum2 ? sum1-sum2:sum2-sum1)