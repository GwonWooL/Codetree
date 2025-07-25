const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let star = "*"

for(let i = 1; i<=n; i++) {
    console.log(star)
    star +="**"
}