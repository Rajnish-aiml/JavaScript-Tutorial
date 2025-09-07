// type of is a operator that return the type of a variable like number number,srting, etc......

//type of is a unary operator
// usually used with primitive data type, less prefer with reference data type.
// always return a string 

// Primitive Data Types
let numb = 42;
let floatNum = 3.14;
let str = "Hello";
let bool = true;
let undef;
let nul = null;
let sym = Symbol("id");
let big = 123456789012345678901234567890n;

// Non-Primitive Data Types
let obj = { name: "Rajnish", age: 21 };
let arr = [1, 2, 3];
let func = function() { return "Hi"; };

console.log("Number:", typeof numb); //"number" -> return a string
console.log("Float:", typeof floatNum);
console.log("String:", typeof str);
console.log("Boolean:", typeof bool);
console.log("Undefined:", typeof undef);
console.log("Null:", typeof nul); // historical bug -> 'object', a Standalone Value
console.log("Symbol:", typeof sym);
console.log("BigInt:", typeof big);
console.log("Object:", typeof obj);
console.log("Array:", typeof arr); // object
console.log("Function:", typeof func);

//typeof quirks kya hota hai:-
// type of sometimes kuch starnge type return karta h, jisko typeof quirks kahte h.
//example:
// null shuld be null but still object and a bug don't fix to maintain backward compatibility of a program.
// array should be array but an object.


let num = 5.6789;

console.log(num.toFixed(0)); // "6"   (rounded to integer)
console.log(num.toFixed(1)); // "5.7"
console.log(num.toFixed(2)); // "5.68"
console.log(num.toFixed(3)); // "5.679"
