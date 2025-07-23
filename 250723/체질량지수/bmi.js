const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let h = input[0]
let w = input[1]

let head = 10000*w
let bottom = h*h
let bmi = parseInt(head/bottom)

if(bmi >= 25) {
    console.log(`${bmi}\nObesity`)
}
else {
    console.log(bmi)
}