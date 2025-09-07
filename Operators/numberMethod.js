// 3 trika se number formatting kar sakte hai JS mein:

// 1.) toFixed() ek Number method hai JavaScript me, jiska use decimal places fix karne ke liye hota hai.

// num.toFixed(digits) // syntax

// num : koi bhi number.

// digits : kitne decimal places chahiye (0 se 100 tak allowed hai).

// Return value: ek string deta hai, number nahi.

// Basic usage:
let num = 5.6789;

console.log(num.toFixed(0)); // "6"   (rounded to integer)
console.log(num.toFixed(1)); // "5.7"
console.log(num.toFixed(2)); // "5.68"
console.log(num.toFixed(3)); // "5.679"

console.log((1.005).toFixed(2)); // "1.01" , for large decimal.

// Always returns string:
let n = 12.3467;
let fixed = n.toFixed(2);

console.log(fixed);         // "12.35"  (string)
console.log(typeof fixed);  // "string"

//if we want number then use parseFloat():

console.log(parseFloat(n.toFixed(2))); // 12.35 (number)
console.log(typeof n)

console.log((2).toFixed(5)); // "2.00000" , zero Padding

// Note: toFixed() rounding ke sath kaam karta hai, truncate nahi karta.
// can also be used in money,  currancy, percentage, string formatting with decimal fixed.

let price = 123.456;
console.log(price.toFixed(2)); // "123.46"

let percent = 0.12345;
console.log((percent * 100).toFixed(1) + "%"); // "12.3%"


console.log((Math.PI).toFixed(4)); // "3.1416" , math.pi ek constant hai pi ka 

console.log(Number(Math.PI.toFixed(4))); // 3.1416 (number)



// 2. toPrecision(digits):-

// Total digits (significant digits) control karta hai.
// Chahe decimal ke pehle ho ya baad.
let num1 = 123.456;

console.log(num1.toPrecision(2)); // "1.2e+2" (scientific notation)
console.log(num1.toPrecision(4)); // "123.5"
console.log(num1.toPrecision(6)); // "123.456"

// Use : Jab exact total digits control karna ho (scientific values, measurements).

// 3. toExponential(digits):

//  Number ko exponential (scientific notation) me string bana deta hai.
// Digits → decimal ke baad kitne digits chahiye.

let num2 = 12345.6789;

console.log(num2.toExponential(2)); // "1.23e+4"
console.log(num2.toExponential(4)); // "1.2346e+4"

// Use : Very large ya very small numbers represent karne ke liye (science, AI, ML).

