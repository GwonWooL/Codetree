const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = n; i>0; i--) {
    let star=""
    for(let k = 0; k<i; k++) {
        star+="* "
    }
    console.log(star)
}
for(let i = 1; i<n; i++) {
    let star =""
    for(let k =0; k<=i; k++) {
        star+="* "
    }
    console.log(star)
}