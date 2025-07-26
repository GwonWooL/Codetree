const fs =require("fs")
let arr = fs.readFileSync(0).toString().split("\n")
let n = Number(arr[0])
let number = arr[1].split(" ").map(Number)

for(let i = 0; i<n; i++) {
    number[i] = number[i]**2
}
console.log(number.join(" "))