const fs = require("fs")
let tem = Number(fs.readFileSync(0).toString())

if(tem >= 100) {
    console.log("vapor")
}
else if(tem < 0) {
    console.log("ice")
}
else {
    console.log("water")
}