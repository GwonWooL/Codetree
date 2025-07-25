const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())

    for(let j = 0; j<n; j++) {
        let result = ""
        for(let k = 0; k<n; k++) {
            result += "*"
        }
        console.log(result)
    }
console.log()
    for(let j = 0; j<n; j++) {
        let result = ""
        for(let k = 0; k<n; k++) {
            result += "*"
        }
        console.log(result)
    }