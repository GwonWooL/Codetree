const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = n; i>0; i--) {
    let star = ""
    for(let k = i; k<n; k++) {
        star+="  "
    }
    for(let j = 1; j<=i*2-1; j++) {
        star += "* "
    }
    console.log(star)
}
for(let i = 1; i<n; i++) {
    let star=""
    for(let j = i+1; j<n; j++) {
        star+="  "
    }
    for(let k = 1; k<=2*i+1; k++) {
        star += "* "
    }
    console.log(star)
}