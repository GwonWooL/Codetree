const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let countArr = Array(10).fill(0)

for(let i = 0; i<arr.length; i++) {
    if(arr[i]>=10&&arr[i]<100) {
        countArr[parseInt(arr[i]/10)]++
    }
    if(arr[i]==0){
        break
    }
}

for(let i = 1; i<=9; i++) {
    console.log(i+" - "+countArr[i])
}