const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let count = 0

while(n<=1000) {
    if(n%2==0) {
        n= n*3+1
        count++
    }
    else {
        n = n*2+2
        count++
    }
    if(n>=1000) {
        console.log(count)
        break
    }
}