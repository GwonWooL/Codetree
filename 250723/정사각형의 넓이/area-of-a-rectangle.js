const fs = require("fs")
let input = Number(fs.readFileSync(0).toString())

let n = input

if(n < 5) {
        console.log(n*n)
    console.log('tiny')
}
else {

    console.log(n**2)
}