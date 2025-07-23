const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let score = 80

if(n>=score) {
    console.log('pass')
}
else {
    console.log(score-n+" more score")
}