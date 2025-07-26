const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let num = []

for(let i = 0; i<arr.length; i++) {
    if(arr[i]==0) {
        console.log(num.join(" "))
        break;
    }
    if(arr[i]%2!=0) {
        num.push(arr[i]+3)
    }
    else {
        num.push(parseInt(arr[i]/2))
    }
}