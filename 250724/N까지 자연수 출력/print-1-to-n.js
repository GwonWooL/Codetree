const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = ""
let num = 1

while(num<=n) {
    result+= (num+" ")
    num++
}
console.log(result)