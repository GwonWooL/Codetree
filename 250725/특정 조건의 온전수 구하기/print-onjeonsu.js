const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let result = ""

for(let i = 1; i<=n; i++) {
    if(i%2==0 || i%10==5 || (i%3==0&&i%9!=0)) {
        continue
    } 
    else {
        result +=(i+" ")
    }
}
console.log(result)