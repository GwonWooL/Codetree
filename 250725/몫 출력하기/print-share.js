const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let count = 0, i = 0

while(true) {
    if(input[i]%2!=0) {
        i++
        continue
    }
    else {
        count++
        console.log(parseInt(input[i]/2))
    }
    if(count==3) {
        break
    }
    i++
}