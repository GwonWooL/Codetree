const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let a = input[0], b = input[1]
let result = ""

let num = parseInt(a/b)
result += (num+".")
let number = a%b

for(let i = 1; i<=20; i++) {
    number *= 10
    result += parseInt(number/b)
    number %= b
}
console.log(result)