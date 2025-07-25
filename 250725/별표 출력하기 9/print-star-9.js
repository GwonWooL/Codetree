const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = 0; i<n; i++) {
    let star = ""
    for(let j = n-1; j>=i+1; j--) {
        star+= "  "
    }
    for(let k = 1; k<=2*i+1; k++) {
        star+="* "
    }
    console.log(star)
}