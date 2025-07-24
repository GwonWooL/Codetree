const fs =require("fs")
let input = fs.readFileSync(0).toString().split(" ").map(Number)
let sum = 0;
for(let i = input[0]; i<=input[1]; i++) {
    if(i%6==0&&i%8!=0) {
        sum +=i
    }
}
console.log(sum)