const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = 0; i<n; i++) {
    let star = ""
    for(let j = i; j<n-1; j++) {
        star+=" "
    }
    for(let k = 0; k<=i; k++) {
        star+="* "
    }
    console.log(star)
}
for(let i = n-1; i>0; i--) {
    let star = ""
    for(let j = i; j<n; j++){
        star += " "
    }
    for(let k = i; k>0; k--) {
        star+="* "
    }
    console.log(star)
}