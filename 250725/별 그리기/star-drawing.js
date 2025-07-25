const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = 1; i<=n; i++) {
    let star = ""
    for(let j = i; j<n; j++) {
        star+=" "
    }
    for(let k = 0; k<2*i-1; k++) {
        star+="*"
    }
    console.log(star)
} 
for(let i = n-1; i>0; i--) {
    let star = ""
    for(let j = i; j<n; j++) {
        star+=" "
    }
    for(let k = 0; k<2*i-1; k++) {
        star+="*"
    }
    console.log(star)
}