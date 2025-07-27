const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")
let number = input[0].split(" ").map(Number)
let a = input[1].split(" ").map(Number)  //배열
let b = input[2] .split(" ").map(Number) //배열
let n1 = number[0], n2 = number[1]       //겟수

let result = false
for(let i = 0; i<n1; i++) {
    if(a[i]==b[0]) {
        for(let j = 1; j<n2; j++) {
            if(a[i+j]==b[j]) {
                result = true
            }
            else {
                result = false
            }
        }
        if(result == true) {
            break
        }
    }
}
console.log(result==false ? "No":"Yes")
