const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

for(let i = 1; i<=2*n+1; i++) {
    let star = ""
    if(i%2!=0) {
        for(let j = 1; j<=n*2+1; j++) {
            star+= "* "
        }
    }
    else {
        for(let j = 1; j<=2*n+1; j++) {
            if(j%2!=0) {
                star+= "* "
            }
            else {
                star+="  "
            }
        }
    }
    console.log(star)
}