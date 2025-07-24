const fs = require("fs")
let n = Number(fs.readFileSync(0).toString())
let count1 = 0, count2 = 0, count3 = 0

for(let i = 1; i<=n; i++) {
    if(i%12==0) {
        count3++
        continue
    }
    else if(i%3==0) {
        count2++
        continue
    }
    else if(i%2==0) {
        count1++
    }
}
console.log(`${count1} ${count2} ${count3}`)