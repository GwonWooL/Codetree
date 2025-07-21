const fs = require("fs")
let input = fs.readFileSync(0).toString().split(":")
let hour = Number(input[0])
let min = input[1].trim()

console.log(hour+1+":"+min)