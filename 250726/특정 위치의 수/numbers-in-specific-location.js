const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0

for(let i = 0; i<10; i++) {
    if(i==2||i==4||i==9) {
        sum+= arr[i]
    }
}
console.log(sum)