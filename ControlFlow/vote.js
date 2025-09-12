// Voting Eligibility with Nested Conditions
// Write a program that takes age and nationality as input.
// If age < 18 → "Not eligible to vote"
// If age >= 18 and nationality = "Indian" → "Eligible to vote"
// Otherwise → "Not eligible (wrong nationality)"

const { userInfo } = require("os");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age and nationality (seperated by space): ", (input) => {
  const parts = input.split(" ");

  const age = Number(parts[0]);
  const nationality = parts[1];


  if (age>=18) {
    if (nationality.toLowerCase()==="indian") {
        console.log("you are eligible to vote.");
    } else{
        console.log("Since you are not an indian, you are not eligible to vote.");
    }
  } else{
    console.log("Since you are not upto 18, you are not eligible to vote.");
  }
  rl.close();
});