const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let i = 0

while(true) {
    if(input[i] < 25) {
        console.log("Higher")
    }
    else if(input[i] > 25) {
        console.log("Lower")
    }
    else {
        console.log("Good")
        break
    }
    i++
}