const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let star = ""

for(let i = n; i>0; i--) {
    for(let j = 0; j<n; j++) {
        for(let k = i; k>0; k--) {
            star +="*"
        }
        star +=" "
    }
    console.log(star)
}