// NaN ka full form hai → Not a Number

// Ye ek special numeric value hai jo JavaScript tab return karta hai jab koi calculation mathematically invalid hoti hai.

// Type check:

console.log(typeof NaN); // "number"

//Matlab NaN bhi ek Number type hi hai, par ek “invalid number”.

// example:

// 1. String ko Number me convert karne ki koshish:
console.log(Number("hello")); // NaN
console.log(parseInt("abc")); // NaN

// 2. Math operation on invalid data

console.log(0 / 0);       // NaN
console.log("abc" * 10);  // NaN
console.log(Math.sqrt(-1)); // NaN

// 3. Failed parsing

let age = Number("20 years");
console.log(age); // NaN

//some important point about NaN :

// NaN is not equal to itself 

console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false


// Ye ek special property hai: NaN kabhi kisi ke equal nahi hota, apne aap ke bhi nahi, coz may be origin of both the NaN is not equal.

// Check karne ke liye isNaN() ya Number.isNaN() use karna padta hai

console.log(isNaN("abc"));          // true (convert karke check karta hai, old function)
console.log(Number.isNaN("abc"));   // false (strict check), only return true when actually a value is NaN but here "abc" is a string so false.
console.log(Number.isNaN(Number("abc"))); // true 
console.log(Number.isNaN(NaN));     // true 
console.log(Number.isNaN(NaN));   // true 
console.log(Number.isNaN(0/0));   // true 
console.log(parseInt('abc'))//NaN

// NaN return true or false.
// porpose: to check for a invalid number.