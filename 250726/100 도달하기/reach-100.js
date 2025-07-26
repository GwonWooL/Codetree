const fs =require("fs")
let n = Number(fs.readFileSync(0).toString())
let arr = [100]

for(let i = 0; i<arr.length-2; i++) {
    arr[0]= 1, arr[1] = n
    arr[i+2] = arr[i-2]+arr[i-1]
    if(arr[i]>=100) {
        break
    }
}
console.log(arr.join(" "))
