// instanceof Operator:
// Ye constructor function (class) ke basis pe check karta hai.
// Answer true/false deta hai.
// Reference data type  ka type check karne ke liye use hota hai.

console.log([] instanceof Array);   // true
console.log([] instanceof Object);  // true (kyunki Array Object ka child hai)
console.log({} instanceof Object);  // true
console.log(new Date() instanceof Date);   // true
console.log(new Date() instanceof Object); // true


let arr = [1,2,3];

console.log(typeof arr);        // "object"
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true


// Primitive values ke liye kaam nahi karega (sirf objects ke liye):

console.log(123 instanceof Number);     // false (primitive number)
console.log(new Number(123) instanceof Number); // true (object wrapper)


// yha normal ek type conversion ho rha hai. 
console.log(Number("123"));  // 123 (number)
console.log(String(123));    // "123" (string)
console.log(Boolean(0));     // false (boolean)
// yha string and boolean ek object wrapper bnn gya hai (new add karne se)
console.log(new String("abc"));   // String object: [String: 'abc']
console.log(new Boolean(false));  // Boolean object: [Boolean: false]