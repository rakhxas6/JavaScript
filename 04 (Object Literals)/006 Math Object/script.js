//? Math Object

console.log(Math);
console.log(Math.PI.toFixed(2));
console.log(Math.E.toFixed(2));

const pi = Math.PI.toFixed(2);
r = 3;
const area = 2 * pi * r ** 2;
console.log(area); //[56.52]
console.log(Math.round(area)); //[57]
console.log(Math.floor(area)); //[56]
console.log(Math.ceil(area)); //[57]
console.log(Math.trunc(area)); //[56]

// random numbers
const random = Math.random();
console.log(random); // 0-1
console.log(Math.round(random * 100)); //1-100

//? OTP generator

function generateOTP(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

console.log(generateOTP()); // e.g., "384719"
