//Important: Agar const ke andar object rakha ho toh uske properties change kar sakte ho, par variable ko reassign nahi kar sakte ('=' assinghment operator ka use karke), as we tought in variable.

// can use Object.freeze() method to restrict the any changes in our object.

// Object.freeze()
// Ye ek method hai jo object ko freeze kar deta hai.

// Matlab:
// ✅ Existing properties ko change/update nahi kar sakte.
// ✅ Naye properties add nahi kar sakte.
// ✅ Properties delete nahi kar sakte.
// ✅ Nested object freeze nahi hota (sirf shallow freeze hota hai).

//Example 1 (Basic freeze):
const car = {
  brand: "Tesla",
  model: "X"
};

Object.freeze(car);

car.brand = "BMW";   // ❌ Change nahi hoga
car.year = 2025;     // ❌ Naya property add nahi hoga
delete car.model;    // ❌ Delete nahi hoga

console.log(car); // { brand: "Tesla", model: "X" }


// Example 2: Nested Object (shallow freeze)
const user = {
  name: "Rajnish",
  address: {
    city: "Patna"
  }
};

Object.freeze(user);

user.name = "Amit";         // ❌ Change nahi hoga
user.address.city = "Delhi"; // ✅ Change hoga (nested freeze nahi hua)

console.log(user);
// { name: "Rajnish", address: { city: "Delhi" } }


const obj = { a: 1 };
Object.freeze(obj);

console.log(Object.isFrozen(obj)); // true ✅
