const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let sum = 0;

for(let i = 1; i<n; i++) {
    if(n%i==0) {
        sum += i
    }
}
if(sum==n) {
    console.log("P")
}
else {
    console.log("N")
}