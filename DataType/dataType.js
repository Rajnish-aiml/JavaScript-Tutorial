//Data types: simply means what type of value of value a valriable can hold.

//two types: 1) primitive 2) non-primitive(Reference)

//primitive data type are immutable in JS means value cannot be changed after created. if any operation appears to modify a primitive data type, it actually create a new primitive value

// we can dirctly copy the value of primitive data type i.e, copy by value, ek real copy milega. 

// example:
let a = 12;
let b = a;

a = a+3; // a= 15 but b remains 12, b ko ek real copy mila hai. 
console.log(a,b);

//Primitive Data Types (7 types):
// 1. Number

// Integer aur floating-point dono represent karta hai.


//2. String

// Text ko represent karta hai (single ', double ", backtick `).

let myName = "Rajnish";
let greet = `Hello ${myName}`;


//3. Boolean

// Sirf true ya false.

let isLoggedIn = true;


//4. Undefined

// Variable declare hua but value assign nahi hui.

let x;
console.log(x); // undefined


//5. Null

// Intentional empty value.

let y = null; // object type dikhega (historical bug in JS)


//6. Symbol (ES6)

// Unique aur immutable value (mostly object properties ke liye use hota hai).

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (always unique)


//7. BigInt (ES11 / ES2020)

// Bohot bade numbers ko represent karta hai (2^53 -1 se bade), last mein n lagate hai representation ke liye .

let bigNum = 123456789012345678901234567890n;


// Non primitive or reference or objects data tpye:
// mutable data tpye means can be modified after created at the same moemory location. 

// three types:

//1. Object:

// Key-value pairs store karta hai.

let person = {
     name: "Rajnish", 
     age: 20
     };
     console.log(person)


//2. Array (special object type):

// Ordered list of values.

let numbers = [1, 2, 3, 4];


//3. Function (object hi hai but callable):

function GREET() {
  return "Hello!";
}

//if we copy any refernce data type then any operations or method applied to that copied value then it will also affect or change the original value.

//in Short:
// primitive: copy by value
// reference type: copy by reference

// primitive data type are standalone value in JS that exist independently and are not objects and functions. Fundamental buliding blocks in JS. 