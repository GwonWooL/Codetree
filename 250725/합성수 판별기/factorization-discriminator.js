const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = false

for(let i = 2; i<=n-1; i++) {
    if(n%i==0) {
        result = true
    }
}

console.log(result==true ? 'C':"N")