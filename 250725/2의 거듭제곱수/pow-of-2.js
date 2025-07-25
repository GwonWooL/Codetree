const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let count = 0;

while(n>1) {
    n /= 2
    count++
    if(n==1 ) {
        break
    }
}
console.log(count)