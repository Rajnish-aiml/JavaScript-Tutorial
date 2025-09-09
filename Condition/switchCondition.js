// switch statement is a control flow statement used to execute different blocks of code based on the value of an expression.

//It provides an alternative to using multiple if...else if statements,especially when dealing with many possible conditions for a single variable or expression.

// Switch uses strict comparison (===). So use same data type as expresssion.

//syntax:

switch (expression) {
  case value1:
    // code to execute if expression === value1
    break;
  case value2:
    // code to execute if expression === value2
    break;
  // ... more cases like these
  default:
    // code to execute if no case matches
    //don't need break here
}

// The switch statement evaluates the expression once, then matches with case value if matched then the particular case will be output.

//why break keyword:

// break keyword used to breaks out of the switch block.
// stop the execution inside the switch block, preventing a "fall-through"

// Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.


// why default keyword:

// The default keyword specifies a block of code to run if there is no case match, totaly optional, can act as fallback.

// If a default is not present and no case matches, nothing happens within the switch block.


// note: 👉 The default case doesn't need to have the last case in a switch block.

// 👉  If default is not the last case in the switch block, remember to end the default case with a break.

// we can also define common code block to execute same expressions but with different switch cases.

// example:

switch (expressions) {
  case 4:
  case 5:
     console.log("Common output for both cases 5 and 5");
    break;
  case 0:
  case 6:
     console.log("Common output for both cases 0 0 and 6");
    break;
  default:
    console.log("No expressions matched");
}


// example:

let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Friday":
    console.log("Happy Friday!");
    break;
  default:
    console.log("invalid day");
}
// Output: Today is Wednesday