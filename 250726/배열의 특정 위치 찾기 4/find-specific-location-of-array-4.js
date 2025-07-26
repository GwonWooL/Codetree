const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)
let  count = 0, sum = 0;

for(let i = 0; i<10; i++) {
    if(arr[i]==0) {
        break
    }
    if(arr[i]%2==0) {
        sum+=arr[i]
        count++
    }
   
}
console.log(`${count} ${sum}`)