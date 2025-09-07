//In JS some value always consider false or true:

//falsy value(8 only):
// false, 0,-0,  0n (BigInt zero),  "" (empty string), null, undefined,  NaN these are the values that always condider false in JS.

// Truthy values:

// Inke alawa sab kuch truthy hai → "0", "false", [], {}, function, non-empty string, etc.

if ("0") {
  console.log("Truthy"); // true
}

if ([]) {
  console.log("Truthy"); // ture
}

if ("") {
  console.log("true"); // yeh run hi nhi karega.
}
else{
    console.log('falsy'); //falsy
}
