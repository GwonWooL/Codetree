const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let mid = input[0], final = input[1]

if(mid >= 90) {
    if(final >= 95) {
        console.log(100000)
    }
    else if(final >= 90) {
        console.log(50000)
    }
    else {
        console.log(0)
    }
}
else {
    console.log(0)
}