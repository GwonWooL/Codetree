const fs = require("fs")
let a = Number(fs.readFileSync(0).toString())
let result = ""

for(let i = 1; i<=a; i++) {
    if((i%2==0&&i%4!=0)||((parseInt(i/8))%2==0)||((i%7)<4)) {
        continue
    }
    else {
        result += (i+" ")
    }
}
console.log(result)