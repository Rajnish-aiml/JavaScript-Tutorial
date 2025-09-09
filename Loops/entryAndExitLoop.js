// In JS, on basis of test conditions loops are classified into two catogeries:
// 1. Entry controlled loop 2.) Exit controlled loop

// 1.) 👉 Entry-Controlled Loops:

// The test condition is checked before the loop body is executed.
// The loop body will only run if the condition evaluates to true initially. 
// If the condition is false from the start, the loop body is never executed.
// Used when the loop may not need to execute at all if the condition is initially false.
// for loop and while loop are example of entry controlled loop.

// for loop: 

for (let i = 0; i < 5; i++) {
    console.log(i); // This code runs only if i < 5 is true
}

// while loop:

let i = 0;
while (i < 5) {
    console.log(i); // This code runs only if i < 5 is true
    i++;
}


// 2.) 👉 Exit-Controlled Loops:

// The test condition is evaluated after the loop body has executed at least once. 
// This guarantees that the loop body will always run at least one time, regardless of whether the condition is initially true or false.
// The condition is checked after the first execution.
// Used when the loop body must execute at least once before evaluating the condition.
// Do-while is an example of exit controlled loop.


let x = 0;
do {
    console.log(x); // This code runs at least once
    x++;
} while (x < 5); // The condition is checked after the first execution