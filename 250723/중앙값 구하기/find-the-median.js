const fs = require("fs")
let input = fs.readFileSync(0).toString().split(' ').map(Number)

let arr = []
arr.push(input[0], input[1], input[2])

arr.sort((a, b)=> a-b)
let middle = parseInt((arr.length/2))

console.log(arr[middle])