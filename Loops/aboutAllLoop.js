//Loops in JavaScript are control flow statements used to repeatedly execute a block of code as long as a specified condition remains true.

// This makes code more concise, efficient and readable.

// Loops are fundamental for tasks involving:

// i)   Iteration over values
// ii)  Iteration over data structures
// iii) Performing an action multiple times

// In JS, there are total 5 types of loops:

// 1.)🤘 For loop:

// Runs a block of code a fixed number of times.
// Iterates over values and expressions.
// The for loop is used when the number of iterations is known.
// It is an entry controlled loop.

// 👉 Mindset: jab humein pehle se pata ho ki loop kitni baar chalna hai, tab for loop use karte hain. Example: numbers print karna 1 se 100 tak.


// Syntax: 
for(initialization; condition; increment/decrement) { 
    // code blocks 
}

// It contains initialization, condition, and increment/decrement in one line.

// It consists of three parts:
// 👉 Initialization: Executed once before the loop begins, typically to declare and initialize a counter variable.
// 👉 Condition: Evaluated before each iteration; if true, the loop body executes; if false, the loop terminates.
//👉 Increment/Decrement: Executed after each iteration to update the counter variable.

// Example: 

for (let i = 1; i <= 10; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
} 

// 2.🤘 While loop:

//  While loop that repeats a block of code as long as a specified condition is true.
// Iterates over a condition.
//  This loop evaluates the condition before each iteration and continues running as long  as the condition remains true.
// It is an entry controlled loop.

// 👉 Mindset: Jab tak condition true hai, tab tak loop chalega. Mtlab hume pta hi naa ho ki jaa condition false hoga, kab tak hume loop chalana hai. Example: user se input lete raho jab tak "exit" na likhe, yha nhi pta hai user kab jaa kar exit likhega aur kitna time loop chalega.

// syntax:

// variable initialized outside the while loop.
while (condition) {
  // code block
  // i++ increment / decrement
}

// example: 

let i = 0;
while (i < 5) {
  console.log(i); // 0 1 2 3 4 
  i++;
}

// 3.🤘 Do-while loop:

// The do-while loop is similar to while loop except it executes the code block at least once before checking the condition.
// Also iterates over a condition but executes a block of code at least once.
// Executes a block of code at least once because the code block is executed before the condition is tested.
// It is an exit controlled loop.

// 👉 Mindset: Jab chahiye ki loop ka code ek baar toh chale hi chale, chahe condition false hi kyun na ho.

// syntax:

// variable initialized outside the Do-while loop.
do {
  // code block
  // i++ increment / decrement
} while (condition);

// example:

let x = 0;
do {
  console.log(x); // 0 1 2 3 4 
  x++;
} while (x < 5);

//😀 while  loop vs do-while loop:

// while loop: 

// It is an entry-controlled loop.
// The number of iterations depends upon the condition specified.
// The block of code is controlled at starting

// do-while loop:

// It is an exit-controlled loop.
// The number of iterations will be at least one irrespective of the condition.
// The block code is controlled at the end. 

// 😮 Attention:

// 1.) Don't forget the increment or decrement of the variable used in the condition, the loop will never end. This will crash your browser or program. And the program will stuck in infinite loop.

// 2.) while writing conditons for loops, we should always try to write conditions that terminates the code execution otherwise the loop will always be true and the browser will be crashed or program will be stucked in infinite loop.

