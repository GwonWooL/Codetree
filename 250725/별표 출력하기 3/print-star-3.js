const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = n; i>0; i--) {
    let star = ""
    for(let j = i; j<n; j++) {
        star+= "  "
    }
    for(let k = i*2-1; k>0; k--) {
        star +="* "
    }
   
    console.log(star)
}