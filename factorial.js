let num = Number(prompt("Enter any number: "));

function factorial(num){
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
let fact = factorial(num);
console.log(`factorial of ${num} is ${fact}`);