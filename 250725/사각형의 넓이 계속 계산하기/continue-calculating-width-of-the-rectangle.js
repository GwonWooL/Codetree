const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let i = 0

while(true) {
    let num = input[i].split(" ")
    let a = num[0], b = num[1], chr = num[2]
    console.log(a*b)

    if(chr == 'C') {
        break;
    }
    i++
}