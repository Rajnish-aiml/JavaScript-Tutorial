// Employee Bonus Calculator:
// Input: Salary, Years of Experience, Gender
// Rules:
// Agar experience ≥ 5 years → 10% bonus
// Agar female employee hai → extra 5% bonus
// Agar salary <= 20000 hai → extra ₹2000 fixed bonus
// Agar experience < 5 years → 5% bonus for all gender
// Final salary print karo.

let salary = Number(prompt("Enter your salary(in ₹): "));
let experienceYear = Number(prompt("Enter your years of Experience: "));
let gender = prompt("Enter your Gender: ").toLowerCase();
let finalSalary;

if (experienceYear >= 5) {
  finalSalary = salary + salary * 0.1; // 10% bonus
  if (salary <= 20000) {
    finalSalary += 2000; // 2000 fixed bonus for salary less than 20000
  }
  if (gender === "female") {
    finalSalary *= 1.05;  // extra 5% bonus for female employee
    //  finalSalary = finalSalary + (finalSalary * 0.05)
  }
} else {
  finalSalary = salary + (salary * 0.05); // 5% bonus for all employee whose age experience less than 5.
}

console.log(
  `Your final salary is ₹${finalSalary} after applying all terms and conditions`
);