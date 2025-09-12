// Q1. Electricity Bill Calculator:
// Write a program to calculate electricity bills based on the following rules:
// For the first 100 units: ₹5 per unit
// For the next 100 units (101–200): ₹7 per unit
// Above 200 units: ₹10 per unit

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("Enter Electricity units consumed: ", (answer) => {
//     let electricityUnits = Number(answer);

// totalAmount = 0;

// if (electricityUnits <= 100) {
//     totalAmount = electricityUnits * 5
// } else if(electricityUnits <= 200){
//     totalAmount = ((100*5) + (electricityUnits - 100)*7)
// } else{
//     totalAmount = ((100*5) + (100)*7 + (electricityUnits-200)*10)
// }
// console.log(`₹${totalAmount} is your total Electricity Bill Amount.`)
// rl.close();
// });

// Q2.) Electricity Bill (Slab Based + Surcharge)
// 0–100 units → ₹5/unit
// 101–200 units → ₹7/unit
// 200+ units → ₹10/unit
// Agar bill ₹1000 se zyada ho jaye toh 10% surcharge add karo.

let electricityConsumed = Number(
  prompt("Enter your Electricity Consumed(in units): ")
); // runs in browser.
let totalBill = 0;

if (electricityConsumed <= 100) {
  totalBill = electricityConsumed * 5;
} else if (electricityConsumed > 100 && electricityConsumed <= 200) {
  totalBill = 100 * 5 + (electricityConsumed - 100) * 7;
} else {
  totalBill = 100 * 5 + 100 * 7 + (electricityConsumed - 200) * 10;
}

if (totalBill > 1000) {
  totalBill = totalBill + (totalBill * 10) / 100;
}
console.log(
  `₹${Math.floor(totalBill)} is your total Electricity Bill Amount.`
);