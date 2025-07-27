const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let number = input[0].split(" ").map(Number)
let num = input[1].split(" ").map(Number)
let n = number[0]
let q = number[1]
//input[2]부터 q개의 질의가 한 줄에 하나씩 주어진다.

for(let i = 2; i<q+2; i++) {
    let arr = input[i].split(" ").map(Number)
    if(arr[0]==1) {
        console.log(num[arr[1]-1])
    }
    else if(arr[0]==2) {
        let result = false, index = 0;
        for(let j = 0; j<n; j++) {
            if(num[j]==arr[1]) {
                result = true
                index = j+1
                break
            }
        }
        console.log(result == false ? 0:index)
    }
    else {
        let result = ""
        for(let j = arr[1]; j<=arr[2]; j++) {
            result += num[j-1]+" "
        }
        console.log(result)
    }
}
