const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let a = input[0], b = input[1], result = ""

if(a>0) {
    for(let i=0; i<b; i++) {
        result +=a
    }
}
else {
    console.log(0)
}
console.log(result)