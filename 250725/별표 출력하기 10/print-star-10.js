const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let count1 = 1, count2 = 0

for(let i = 1; i<=n*2; i++) {
    let star = ""
    if(i%2!=0) {
        for(let j = 1; j<=count1; j++) {
            star+= "* "
        }
        count1++
    }
    else {
        for(let j = n; j>count2; j--) {
            star +="* "
        }
        count2++;
    }
    console.log(star)
}