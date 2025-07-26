const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0, avg = 0

for(let i = 0; i<10; i++) {
    if(arr[i]==0) {
        break
    }
    sum += arr[i]
    avg = sum/(i+1)
}
console.log(`${sum} ${avg.toFixed(1)}`)