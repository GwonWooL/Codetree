const fs= require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)

for(let i = 0; i<input[0]; i++) {
    let result = ""
    for(let j = 0; j<input[1]; j++) {
        result+= "* "
    }
    console.log(result)
}