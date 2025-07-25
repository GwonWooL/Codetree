const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let i = 0

while(true) {
    if(input[i]==1) {
        console.log("John")
    }
    else if(input[i]==2) {
        console.log("Tom")
    }
    else if(input[i]==3) {
        console.log("Paul")
    }
    else if(input[i]==4) {
        console.log("Sam")
    }
    else {
        console.log("Vacancy")
        break
    }
    i++
}