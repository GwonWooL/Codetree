const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let countArr = Array(11).fill(0)
let a = arr[0], b = arr[1]

while(a>1) {
    for(let i = 0; i<10; i++) {
        if(i==(a%b)) {
            countArr[i]++
        }
    }
    a = parseInt(a/b)
}

let sum = 0;
for(let i = 0; i<10; i++) {
    sum += countArr[i]**2
}
console.log(sum)