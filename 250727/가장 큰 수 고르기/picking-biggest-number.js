const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let max = arr[0]

for(let i = 1; i<arr.length; i++) {
    if(max < arr[i] ) {
        max = arr[i]
    }
}
console.log(max)