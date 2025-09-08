// Type Coercion:

// JavaScript loose typed hai → automatically / implicitly ek type ko dusre type me convert kar deta hai (jab zaroorat ho).

// Isko type coercion bolte hain.
//example:

console.log("5" + 1);   // "51"   (number → string)
console.log("5" - 1);   // 4      (string → number)
console.log(true + 1);  // 2      (true → 1)
console.log(false + 1); // 1      (false → 0)

// explicitly type conversion karna type coercion nhi kahlata hai.
//example:-

Number("123");   // 123
String(123);     // "123"
Boolean(0);      // false

//type conersion(explicitily):

let a = 'hy';
let x = '7'
console.log(typeof x);
console.log(typeof +x);
console.log(typeof Number(x))
console.log( Number(a)) //NaN
console.log('\n')
let z = true;
console.log(typeof (z +''))
console.log(typeof (10+''))

// 2. Boolean ↔ Number
//  Boolean → Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(+true);         // 1 (unary + operator)
console.log(+false);        // 0

// Number → Boolean
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(-1));  // true
console.log(Boolean(100)); // true

// 3. Boolean ↔ String
//  Boolean → String
console.log(String(true));  // "true"
console.log(false.toString()); // "false"

// String → Boolean
console.log(Boolean(""));      // false (empty string)
console.log(Boolean("hello")); // true
console.log(Boolean("0"));     // true (non-empty string is always true)

//  4. null & undefined Conversions
console.log(Number(null));     // 0
console.log(Number(undefined)); // NaN
console.log(String(null));     // "null"
console.log(String(undefined)); // "undefined"
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false

// 5. Object ↔ Primitive

// Objects jab convert hote hain to JS toString() ya valueOf() call karta hai:

console.log(String([1,2,3])); // "1,2,3"
console.log(Number([1]));     // 1
console.log(Number([1,2]));   // NaN
console.log(String({}));      // "[object Object]"
console.log(Number({}));      // NaN

//  6. Special Cases (Weird JS Coercions )
console.log([] + []);     // ""  (empty string)
console.log([] + {});     // "[object Object]"
console.log({} + []);     // 0 (in some cases) or "[object Object]"
console.log(true + true); // 2
console.log(false + true); // 1
console.log("5" - "2");   // 3 (string → number)