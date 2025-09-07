console.log(2<8<4) // true 

// JavaScript uses various operators to perform actions on values and variables.
// 1. Arithmetic Operators:
// These perform standard mathematical calculations.
// example:
 let a = 10, b = 3;

console.log(a + b); // 13 
console.log(a - b); // 7  
console.log(a * b); // 30 
console.log(a / b); // 3.333... 
console.log(a % b); // 1
console.log(a ** b); // 1000 
console.log('\n');

//2. Assignment Operators
// These assign values to variables, often combining an arithmetic operation with assignment.
// these are: = += -= *= /= %= **=
//example:
let x = 10;

x += 5; // x = x + 5 i.e, 15
x -= 2; // x = x - 2 i.e, 13
x *= 2; // x = x * 2 i.e, 26
x /= 2; // x = x / 2 i.e, 13
x %= 4; // x = x % 4 i.e, 1
x **= 3; // x = x^3 i.e, 1
console.log('\n');

//3. Comparison Operators:
//These compare two values and return a boolean (true or false).
//example:
console.log(5 == "5");   // true  (loose equal, type coercion)
console.log(5 === "5");  // false (strict equality check)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false
console.log('\n');


//4. Logical Operators:
// These are used to combine conditional statements and return a boolean value.
//example:
console.log(true && false); // false (Logical AND)
console.log(true || false); // true  (Logical OR)
console.log(!true);         // false (Logical NOT)
console.log(0 && "hello");  // 0   (AND stops at falsy value)
console.log(1 || "hello");  // 1   (OR stops at truthy value)
console.log('\n');

//5. Bitwise Operators:
//These operators work on the binary representation of numbers (32-bit integers).
//example:
console.log(5 & 1);  // 1  (AND)
console.log(5 | 1);  // 5  (OR)
console.log(5 ^ 1);  // 4  (XOR)
console.log(~5);     // -6 (NOT → -(n+1))
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2  (right shift)
console.log('\n');

//6. String Operators:
//The + operator can also be used to concatenate (join) strings
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; // result is "Hello World"
console.log('\n');


//7. Ternary (Conditional) Operator:
//This is a shortcut for an if-else statement. It's the only JS operator that takes three operands.
let age = 18;
let vote = (age >= 18) ? "Yes" : "No";
console.log(vote); // "Yes"
console.log('\n');

//8. Unary Operators:
//operates on single operand
let q = 5;
console.log(+q);q    // 5 (unary plus → number me convert)
console.log(-q);     // -5 (negation)
console.log(++q);    // 6 (pre-increment)
console.log(q++);    // 6 (post-increment, baad me add)
console.log(--q);    // 6 (pre-decrement)
console.log(q--);    // 6 (post-decrement)
console.log('\n');

//9. Type Operators:
// 2 types: i) typeof ii) instanceof
console.log(typeof 123);   // "number"
console.log(typeof "abc"); // "string"

class Person {}
let p = new Person();

console.log(p instanceof Person); // true
console.log([] instanceof Array); // true
console.log('\n');


// 10. Increment & Decrement Operators:
// These are unary operators that add or subtract 1 from a variable's value.

// i) Pre-Increment (++a):
// Pehle value badhao, fir use karo.

let w = 5;
console.log(++w); // 6 (pehle increment hua, fir print hua)
console.log(w);   // 6
console.log('\n');

// ii) Post-Increment (a++):
// Pehle value use karo, fir increment karo.

let z = 5;
console.log(z++); // 5 (pehle print hua, fir badha)
console.log(z);   // 6
console.log('\n');


// iii) Pre-Decrement (--a)
let c = 5;
console.log(--c); // 4
console.log(c);   // 4
console.log('\n');

// iv) Post-Decrement (a--)
let d = 5;
console.log(d--); // 5
console.log(d);   // 4
console.log('\n');

// 11. Relational Operators: in checks if a property exists in an object.
const person = {firstName: "John", lastName: "Doe"};
"firstName" in person; // returns true
console.log('\n');


//Modern JS operators:-

// 12. Nullish Coalescing Operator (??):-
//?? ka kaam hai: agar left side null ya undefined ho tabhi right side return kare.
// Baaki falsy values (0, "", false) ko valid manega, unlike ||.

let user = null;
console.log(user ?? "Guest"); // "Guest"

let user2 = "";
console.log(user2 ?? "Guest"); // "" (kyunki empty string null/undefined nahi hai)

let count = 0;
console.log(count ?? 10); // 0 (kyunki 0 null/undefined nahi hai)

// Difference from || (OR):
console.log(0 || 100);   // 100  (0 falsy hai)
console.log(0 ?? 100);   // 0    (0 null/undefined nahi hai)
console.log('\n');


// 13. Optional Chaining Operator (?.):
// Kabhi kabhi deeply nested object properties hoti hain jo exist nahi karti.
// Normally → error aata.
// ?. use karke safe check kar sakte hain.

let userx = {
  profile: { name: "Raj" }
};

console.log(userx.profile?.name);   // "Raj"
console.log(userx.address?.city);   // undefined (error nahi aayega!)

// can also be used in function
let usery = {
  greet() { return "Hello"; }
};

console.log(usery.greet?.()); // "Hello"
console.log(usery.sayHi?.()); // undefined (error nahi aaya)
console.log('\n');

// How ?. Solves It:
// If any part of the chain is null or undefined, the expression short-circuits and returns undefined immediately instead of throwing an error.


// 14. spread (...) and Rest (...) Operator:-

// (A) Spread Operator → expand karta hai:
// The spread operator "unpacks" elements from an iterable (like an array) or properties from an object.
// Array/object ko spread (phailata) hai.
// Mostly use: array copy, merge, function arguments.


// Array
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Function arguments
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...arr)); // 6

//Object me:
let obj1 = { name: "Raj", age: 20 };
let obj2 = { ...obj1, city: "Delhi" };
console.log(obj2); // { name: "Raj", age: 20, city: "Delhi" }
console.log('\n');


// (B) Rest Operator → collect karta hai:
// The rest operator does the opposite: it "collects" multiple elements and condenses them into a single array. It's used in function parameters and destructuring
//Multiple values ko ek array me pack karta hai.
// Mostly use: function arguments, destructuring.

// Function
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Destructuring
let [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
console.log('\n');