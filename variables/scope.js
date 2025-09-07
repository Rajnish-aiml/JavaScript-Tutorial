// Scope = Area of the program jahan tak ek variable accessible hai.
// Matlab variable kahaan tak dikhta hai aur kahaan use kar sakte hai.


// Types of Scope in JavaScript:
// 1. Global Scope :
// Variable declared outside any function or block.
// Accessible anywhere in the file.

var a = 10;   // global
let b = 20;   // global
console.log(a, b); // 10, 20


// 2. Function Scope (Local Scope):
// Variables declared inside a function → accessible only inside that function.
// var, let, const all respect function scope.

function test() {
  var x = 5;   // local
  let y = 6;   // local
  const z = 7; // local
  console.log(x, y, z); // ✅ accessible here
}
// console.log(x); ❌ Error (not accessible outside)


// 3. Block Scope { }:
// Introduced in ES6 with let and const.
// Variable declared inside { } block → accessible only inside that block.
// var ❌ ignores block scope (it escapes).

{
  var p = 100;   // ❌ not block-scoped (var not respect block)
  let q = 200;   // ✅ block-scoped
  const r = 300; // ✅ block-scoped
}
console.log(p); // ✅ 100
// console.log(q); ❌ Error
// console.log(r); ❌ Error


// 4. Lexical Scope (Closure):

// Inner function can access variables from outer function.
// Very important in JS
// called closure in js
// details will be in function

function outer() {
   name = "Rajnish";
  function inner() {
    console.log("Hello " + name); // ✅ inner can access outer
  }
  inner();
}
outer(); // Hello Rajnish

