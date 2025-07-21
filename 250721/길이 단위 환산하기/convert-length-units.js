const fs = require("fs")
let num = Number(fs.readFileSync(0).toString())
console.log((num*30.48).toFixed(1))