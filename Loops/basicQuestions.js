// 1.Write a program to print numbers from 1 to 20 using a for loop.

for (let i = 1; i < 21; i++) {
  console.log(i);
}

// 2.Print the multiplication table of 7 using a loop.

for (let i = 1; i < 11; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// 3.Write a program to calculate the sum of first 10 natural numbers.
console.log("First 10 natural numbers:");
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// 4.Print all even numbers between 1 and 50 using a while loop.

{
  let i = 1;
  console.log("Even numbers between 1 and 50:");
  while (i < 51) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}

// 5.Print numbers from 10 to 1 in reverse order using a for loop.

console.log("Numbers from 10 to 1 in reverse order:");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 6.Write a program to find the factorial of a given number using a loop.
// (Example: Input = 5 → Output = 120)

{
  let num = 6;
  console.log(`Facrorial of ${num} is:`);
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
}

// 7.Write a program to check whether a given number is prime or not using a loop.
{
  console.log("\n");
  console.log("prime number:");
  let num = 111;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is not a prime number.`);
  }
}

// 8.Write a program to check whether a given number is composite or not using a loop.
{
  console.log("\n");
  console.log("composite number:");
  let num = 111;
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log(`${num} is not a composite number.`);
  } else {
    console.log(`${num} is a composite number.`);
  }
}

// 9.Write a program that takes a string (e.g. "javascript") and counts how many vowels are in it.

{
  console.log("\n");
  console.log("By using common approach: ");
  let str = "javascript";
  let count = 0;
  let strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    let ch = str[i].toLowerCase(); // convert to lower case
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++; // common approach
    }
  }
  console.log(`Total number of vowel in ${str} is ${count}.`);
  console.log(`Total number of consonent in ${str} is ${strLength - count}.`);
}

{
  console.log("\n");
  console.log("By using includes method: ");
  let str = "Hello";
  let count = 0;
  let vowel = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    } // using includes method
  }
  console.log(`Total number of vowel in ${str} is ${count}.`);
  console.log(`Total number of consonent in ${str} is ${str.length - count}.`);
}

// 10.Create a program that asks the user for 5 numbers and finds the largest number using a loop.
{
  console.log("\n");
  let marks = [76, 68, 98, 56, 89];
  let marksLength = marks.length;
  let i = 0;
  let largestnum = marks[0]; //marks[0] is largest number for now
  while (i < marksLength) {
    if (marks[i] > largestnum) {
      largestnum = marks[i];
    }
    i++;
  }
  console.log(`The largest number among ${marks} is ${largestnum}.`);
  console.log("\n");
}

// 11. Take an array of numbers: [2, 5, 8, 11, 14]. Use a loop to print only the odd numbers.

{
  let num = [2, 5, 8, 11, 14, 43, 23, 76, 54];
  let i = 0;
  let oddnum = [];
  while (i < num.length) {
    if (num[i] % 2 !== 0) {
      oddnum.push(num[i]); // add all odd number in oddnum[] by using push method[] of array.
    }
    i++;
  }
  console.log(`Odd numbers in ${num} are ${oddnum}.`);
}

// 12. Write a program to print all even numbers between 1 and 100 using a loop.

{
  console.log("\n");
  evenNum = [];
  for (let i = 2; i < 101; i += 2) {
    evenNum.push(i);
  }
  console.log(`All even numbers between 1 and 100 are ${evenNum}`);
}


