const fs = require("fs")
let input = fs.readFileSync(0).toString().split("-")

let front = (input[0])
let mid = Number(input[1])
let last = Number(input[2])

console.log(`${front}-${last}-${mid}`)