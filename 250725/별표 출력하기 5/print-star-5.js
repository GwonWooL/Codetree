const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())


for(let i = n; i>0; i--) {
    let star = ""
    for(let j = i; j>0; j--) {
        for(let k = i; k>0; k--) {
            star +="*"
        }
        star +=" "
    }
    console.log(star)
}