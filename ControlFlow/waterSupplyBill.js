// Water Bill with Slabs + Penalty:
// First 1000 liters → Free
// Next 2000 liters → ₹2/liter
// Next 3000 liters → ₹5/liter
// 6000+ liters → ₹10/liter
// Agar bill ₹5000 se zyada ho jaye toh 15% penalty add karo.

let waterInLiters = Number(prompt("Enter water consumed (in liters): "));
let finalbill = null;

if (waterInLiters <= 1000) {
  finalbill = 0;
} else if (waterInLiters <= 3000) {
  finalbill = (waterInLiters - 1000) * 2;
} else if (waterInLiters <= 6000) {
  finalbill = ((2000 * 2) + (waterInLiters - 3000) * 5);
} else {
  finalbill = ((2000 * 2) + (3000 * 5)+ (waterInLiters - 6000) * 10);
}

if (finalbill > 5000) {
  finalbill = (finalbill + (finalbill * 0.15));
}

console.log(
  `You have used ${waterInLiters} liters of water and your final bill is ₹${Math.floor(finalbill)} after applying all terms and conditions.`
);