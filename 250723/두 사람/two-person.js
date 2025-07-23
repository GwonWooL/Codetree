const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")

let first = input[0].split(" ")
let second = input[1].split(" ")
let first_A = Number(first[0]), first_S = first[1]
let second_A = Number(second[0]), second_S = second[1]

if((first_A >= 19 || second_A >= 19)&&(first_S=='M'||second_S=='M')) {
    console.log(1)
}
else {
    console.log(0)
}
