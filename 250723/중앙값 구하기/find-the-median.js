const fs = require("fs")
let input = fs.readFileSync(0).toString().split(' ').map(Number)

let a = input[0]
let b = input[1]
let c = input[2]

if(a > b) {
    if(b > c) {
        console.log(b)
    }
    else if(c > b && a > c) {
        console.log(c)
    }
}
if(b > a) {
    if(a > c) {
        console.log(a)
    }
    else if(c > a && b > c) {
        console.log(c)
    }
}
if(c > a) {
    if(a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}