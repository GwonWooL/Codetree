const fs = require("fs")
let month = Number(fs.readFileSync(0).toString())

if(month==1||month ==3||month ==5||month ==7||month==8||month==10||month==12) {
    console.log("31")
}
else if(month==2) {
    console.log("28")
}
else {
    console.log(30)
}