const fs =require("fs")
let n = Number(fs.readFileSync(0).toString())
let arr = [1, n], count = 2

while(true) {
    arr[count] = arr[count-1] + arr[count-2]
    if(arr[count]>=100) {
        break
    }
    count++
}
console.log(arr.join(" "))