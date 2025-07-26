const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let countArr = Array(11).fill(0)

for(let i = 0; i<arr.length; i++) {
    if(arr[i]==0) {
        break
    }
    countArr[parseInt(arr[i]/10)]++
  
}
for(let i = 10; i>=1; i--) {
    console.log(i*10+" - "+countArr[i])
}
