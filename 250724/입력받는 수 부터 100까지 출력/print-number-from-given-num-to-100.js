const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = ""
for(let i = n; i<101; i++) {
    result += (i+" ")
}
console.log(result)