const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

let result = ""

for(let i = 1; i<=n; i++) {
    result += (i+" ")
}
console.log(result)