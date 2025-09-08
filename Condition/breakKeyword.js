// About break keyword:

// The break keyword is a control flow statement used to terminate the execution of a loop or a switch statement immediatly, or a labeled statement.

// used to early exit from loop based on a specific condition.


//Note: 👉 break keyword cann't be directly used within if else statement


// 1. Terminating Loops:
// When break is encountered inside a for, while, or do...while loop, it immediately exits the loop, and program control transfers to the statement following the loop. This is useful for stopping a loop early based on a specific condition. 

// break stops the loop's iteration regardless of whether the loop's condition is still true.

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log(i);
}
// Output: 0, 1, 2

// 2. Usage in switch Statements:

// In a switch statement, break is crucial for preventing "fall-through" from one case to the next. Without break, after a matching case is executed, the code would continue to execute the subsequent case blocks until a break or the end of the switch statement is reached.

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break; // Prevents fall-through to "Tuesday"
  case "Tuesday":
    console.log("Another workday.");
    break;
  default:
    console.log("Some other day.");
}

// 3. Jumping out of Labeled Statements:

// For nested loops or blocks, break can be used with a label to exit a specific outer loop or labeled statement. This provides more granular control over which block is terminated.

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Exits the 'outerLoop'
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

