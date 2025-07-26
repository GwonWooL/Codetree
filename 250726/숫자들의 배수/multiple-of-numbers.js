const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let arr = [], count = 1, count1 = 0

while(true) {
    if((n*count)%5==0) {
        count1++
    }
    arr.push(n*count)
    count++
    if(count1==2) {
        console.log(arr.join(" "))
        break
    }
}