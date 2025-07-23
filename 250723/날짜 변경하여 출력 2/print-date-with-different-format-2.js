const fs = require("fs")
let input = fs.readFileSync(0).toString().split("-")
let year =  input[2].trim()
let month = input[0]
let day = input[1]
console.log(`${year}.${month}.${day}`)