const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = "", num = 1

while(num<=n) {
    if(num%3==0) {
        result += (num+" ")
    }
    num++
}
console.log(result)