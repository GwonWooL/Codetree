const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

console.log(arr[1]+" "+arr[4]+" "+arr[7])