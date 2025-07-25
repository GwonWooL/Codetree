const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = ""

for(let i = 0; i<n; i++) {
    result +=("*")
}

for(let i=0; i<n; i++) {
    console.log(result)
}