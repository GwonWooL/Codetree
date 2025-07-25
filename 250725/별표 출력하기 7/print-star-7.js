const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let star = ""

for(let i = 0; i<n; i++) {
    star += "* "
    console.log(star)
}