const fs = require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let result = false;
for(let i = input[0]; i<=input[1]; i++) {
    if(i%input[2]==0) {
        result = true
    }
}
if(result == false) {
    console.log("NO")
}
else {
    console.log("YES")
}