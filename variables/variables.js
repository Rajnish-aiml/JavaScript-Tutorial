// three ways-> var, let and const

// variables: A memory location that stores some value.

// q = 20; valid but not recommanded

// about var:

// 1. var (Old School)
// Introduced: ES1 (1995)
// Scope: Function-scoped (sirf function ke andar valid hota hai).
// Hoisting: Upar uth jaata hai (but value undefined hoti hai).
// Redeclare: Allowed (same variable name dobara likh sakte ho).
// Reassign: Allowed
// no use in today world

var a; //decelear
var a = 5; // deceleration and initialization
var a = 6; //redeclear and reinitialization
a = 7; //reassign 

console.log(a); // use to print something on console

//about let:

// 2. let (Modern Variable)
// Introduced: ES6 (2015)
// Scope: Block-scoped { } ke andar limited.
// Hoisting: Hoti hai, but Temporal Dead Zone (TDZ) ke wajah se use karne se pehle error aata hai.
// Redeclare: Not allowed (same scope me).
// Reassign: Allowed.

// let x;  valid
// let x = 5;  not valid
// let x= 8; not valid

let x = 6; // valid
x = 6;  //valid
console.log(x);
let y = 7 
console.log(y);
// about const:

// 3. const (Permanent)

// Introduced: ES6 (2015)
// Scope: Block-scoped.
// Hoisting: Same as let (TDZ ke wajah se pehle use karne par error).
// Redeclare: Not allowed.
// Reassign:  Not allowed.
// use: for constant value 

// const y; not valid 
const z = 4; //valid
// while decleelaring const deceleration and Initialization must be done while creating variable

// const z; not valid
console.log(z);
//Important: Agar const ke andar object/array rakha ho toh uske properties change kar sakte ho, par variable ko reassign nahi kar sakte ('=' assinghment operator ka use karke), directly.