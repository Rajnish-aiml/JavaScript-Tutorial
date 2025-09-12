// ATM Cash Withdrawal
// User se balance aur withdrawal amount input lo
// Conditions:
// Agar withdrawal > balance → "Insufficient Balance"
// Agar withdrawal % 100 !== 0 → "Amount must be multiple of 100"
// Warna, balance update karke print karo

let balance = Number(prompt("Enter your Balance amount(in ₹): "));
let withdrawal = Number(prompt("Enter your Withdrawal amount(in ₹): "));

if (withdrawal <= balance) {
  if (withdrawal % 100 !== 0) {
    console.log("Withdrawal amount must be multiple of 100");
  } else {
    balance = balance - withdrawal; // balance updated
    console.log(
      `You have withdraw amount ₹${withdrawal} and your balance is ₹${balance}`
    );
  }
} else {
  console.log(
    `Your withdrawal amount ₹${withdrawal} is more than your balance ₹${balance}`
  );
}
