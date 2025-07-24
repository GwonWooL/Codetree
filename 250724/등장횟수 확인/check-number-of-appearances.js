const fs =require("fs")
let input = fs.readFileSync(0).toString().split("\n").map(Number)
let count = 0;

for(let i = 0; i<5; i++) {
    if(input[i]%2==0) {
        count++
    }
}
console.log(count)