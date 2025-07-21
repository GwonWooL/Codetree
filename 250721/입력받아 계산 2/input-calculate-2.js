const fs = require("fs")
const input = fs.readFileSync(0).toString()
const result = input.split(" ")
const a = Number(result[0])
const b = Number(result[1])

console.log(a*b)
