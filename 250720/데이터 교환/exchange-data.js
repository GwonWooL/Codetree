let [a, b, c] = [5, 6, 7]
let temp = a;
a = c
c = b
b = temp
console.log(a)
console.log(b)
console.log(c)