const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let first = input[0].split(" "), second = input[1].split(" "), third = input[2].split(" ")
let firstS = first[0], firstT = Number(first[1])
let secondS = second[0], secondT = Number(second[1])
let thirdS = third[0], thirdT = Number(third[1])

let count = 0
if(firstS=='Y'&&firstT>=37) {
    count++
}
if(secondS=='Y'&&secondT>=37) {
    count++
}
if(thirdS=='Y'&&thirdT>=37) {
    count++
}

if(count >= 2) {
    console.log("E")
}
else {
    console.log("N")
}