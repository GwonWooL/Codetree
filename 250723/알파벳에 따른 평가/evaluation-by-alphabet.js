const fs = require("fs")
let char = fs.readFileSync(0).toString().trim()

if(char == 'S') {
    console.log("Superior")
}
else if(char =='A') {
    console.log("Excellent")
}
else if(char == 'B') {
    console.log("Good")
}
else if(char=='C') {
    console.log("Usually")
}
else if(char=='D') {
    console.log("Effort")
}
else {
    console.log("Failure")
}