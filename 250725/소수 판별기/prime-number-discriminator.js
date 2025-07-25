const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = false

for(let i = 2; i<n; i++) {
    if(n%i==0) {
        result = true
    }
}
console.log(result==true ? "C":"P")