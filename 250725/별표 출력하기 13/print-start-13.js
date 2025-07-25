const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = 1; i<=2*n; i++) {
    let star = ""
    if(i%2!=0) {
        for(let j=1; j<=n-parseInt(i/2); j++) {
            star +="* "
        }
    }
    else {
        for(let j = 1; j<=i/2; j++) {
            star +="* "
        }
    }
    console.log(star)
}