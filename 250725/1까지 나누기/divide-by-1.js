const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = n, count = 0

for(let i = 1; i<=n; i++) {
    result = parseInt(result/i)
    count++
    if(result <= 1) {
        console.log(count)
        break
    }
}