const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let num = 1

while(num <=n) {
    console.log("*")
    num++
}