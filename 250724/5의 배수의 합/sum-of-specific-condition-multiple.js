const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0;
if(input[0] >= input[1]) {
    for(let i = input[1]; i<=input[0]; i++) {
        if(i%5==0) {
            sum+=i
        }
    }
}
else {
    for(let i = input[0]; i<=input[1]; i++) {
        if(i%5==0) {
            sum+=i
        }
    }
}
console.log(sum)