const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let sex = Number(input[0]), age = Number(input[1])
if(sex == 0) {
    if(age >= 19) {
        console.log("MAN")
    }
    else {
        console.log("BOY")
    }
}
else {
    if(age>=19) {
        console.log("WOMAN")
    }
    else {
        console.log("GIRL")
    }
}