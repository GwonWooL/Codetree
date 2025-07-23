const fs = require("fs")
let mon = Number(fs.readFileSync(0).toString())

if(mon >= 3000) {
    console.log("book")
}
else if(mon >= 1000) {
    console.log("mask")
}
else {
    console.log("no")
}