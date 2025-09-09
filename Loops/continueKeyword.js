// The continue keyword is a control flow statement used to skip the remaining statements in the current iteration of a loop and immediately proceed to the next iteration.

// When continue is encountered, the program immediately stops executing the current block of code within the loop and proceed to next iteration if condition is still true.

// The continue statement is particularly useful when certain conditions within a loop require bypassing the remaining code in the current iteration without terminating the entire loop.

// 😮 Attention: The continue keyword can only be used inside loops (e.g., for, while, do-while). Using continue outside of a loop will result in a syntax error or compilation error, depending on the programming language.


// example: 

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip the rest of the code for this iteration when i is 3
  }
  console.log(i);
}


// 👉 Key difference from break:

// The break keyword terminates the entire loop, exiting it completely.
// The continue keyword only skips the current iteration and allows the loop to continue with subsequent or next iterations.

