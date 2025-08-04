// type conversion

let score = '100';
console.log(typeof score) //[string]

console.log(score + 1) //[1001] performs concatenation


score = Number(score)
console.log(score + 1)     //[101] performs addition
console.log(typeof score) //[number]


let result = 'hello'
result = Number(result)
console.log(result)  //[NaN]


let test = String(50)
console.log(test)  //50
console.log(typeof test) //string


let boolean = Boolean(100)
console.log(boolean, typeof boolean) //[true boolean]


let test1 = Boolean(0)
console.log(test1, typeof test1) //false boolean


let num = Boolean('0')
console.log(num, typeof num) //true boolean


let num2 = Boolean('')
console.log(num2, typeof num2) //false boolean
//+ numbers and - numbers are truthy values  in type converison
// 0 are falsy values