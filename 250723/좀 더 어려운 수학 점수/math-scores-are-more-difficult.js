const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let score01 = input[0].split(" ").map(Number)
let score02 = input[1].split(" ").map(Number)

let aMath = score01[0], aEng = score01[1]
let bMath = score02[0], bEng = score02[1]

if(aMath == bMath) {
    if(aEng > bEng) {
        console.log("A")
    }
    else {
        console.log("B")
    }
}
else {
    if(aMath > bMath) {
        console.log("A")
    }
    else {
        console.log("B")
    }
}