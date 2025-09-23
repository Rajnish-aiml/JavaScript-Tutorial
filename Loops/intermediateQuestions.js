// 1. Write a program to print the Fibonacci series up to n terms.
// Example: 0 1 1 2 3 5 8 13 ... , including 0th terms also.

// let termsNum = 9;
// let fibo =[];
// for(let i = 0; i < termsNum; i++){

// }

let termsNum = 9;  // kitne terms chahiye
let fibo = [];

for (let i = 1; i <= termsNum; i++) {
  if (i === 1) {
    fibo.push(0);   // 0th term
  } else if (i === 2) {
    fibo.push(1);   // 1st term
  } else {
    fibo.push(fibo[i - 1] + fibo[i - 2]); // last two ka sum
  }
}

console.log(`Fibonacci series up to ${termsNum} terms: ${fibo}`);
