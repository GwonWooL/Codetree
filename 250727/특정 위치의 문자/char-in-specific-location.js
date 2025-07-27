let arr = ['L', 'E', 'B', 'R', 'O','S']
const fs = require("fs")
let chr = fs.readFileSync(0).toString().trim()
let result = false; let count = 0

for(let i = 0; i<6; i++) {
    if(chr==arr[i]) {
        result = true
        count = i
        break
    }
}

console.log(result == false ? "None": count)