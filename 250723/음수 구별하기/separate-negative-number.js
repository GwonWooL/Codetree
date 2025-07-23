const fs = require("fs")
let input = fs.readFileSync(0).toString()
let a = Number(input)

if(a >=0) {
    console.log(`${a}`)
}
else {
    console.log(`${a}\nminus`)
}