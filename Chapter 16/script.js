//  array is a special type of object used to store ordered collections of values. These values can be of any type: strings, numbers, objects, other arrays, etc.

// const fruits = ["apple", "banana", "cherry"];
// const numbers = [1, 2, 3, 4, 5];
// const mixed = [1, "hello", true, null];
// const nested = [
//   [1, 2],
//   [3, 4],
// ];


let ninjas = ['Sujan', "Sajan", "nandi"];
// ninjas[1] = "ken"     // we can override the orignial data tooo.

// console.log(ninjas[1])

// let ages = [20, 23, 34, 45]
// console.log(ages[2])


let random = ['shaun', 'crystal', 30, 20, null, undefined]
// console.log(random)

console.log(random.length)


// Array Methods

// let result = ninjas.join(',')

// let result = ninjas.indexOf('nandi')
// let result = ninjas.concat(['ken','crystal'])

// let result = ninjas.push('Mahadev') //IT RETURNS THE NEW LENGTH
let result = ninjas.pop() //it takes last element of array

console.log(result)
// console.log(ninjas)