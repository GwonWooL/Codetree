const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = 1; i<=n; i++) {
    let star=""
    if(i%2==0) {
        for(let j = 0; j<i; j++) {
            star +="* "
        }
    }
    else {
        star +="* "
    }
    console.log(star)
}