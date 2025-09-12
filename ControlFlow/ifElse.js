//if we want to perform different actions for different decisions, we can use conditional statements in our code to do this.

// first one is if-else, second one is switch statement then loops.

//About if-else........

// In JavaScript, the if...else statement is a fundamental control flow structure that allows for conditional execution of code blocks. It enables a program to make decisions and execute different code paths based on whether a specified condition evaluates to true or false

// syntax:

if (condition) {
  // Code block to execute if the condition is true
} else {
  // Code block to execute if the condition is false
}

// if-else ladder: when multiple needs to check then use if else ladder...

//syntax:

if (condition1){
    // code to execute if conditon is true
} else if (conditon2){
    //code execute if condition1 is false and conditon2 is true
} else if (conditon3){
    //code to execute if condition1 and condition2 both evaluate to false and conditon3 is true and so on........
}else {
    // Code to execute if all the the condition is false
}

// Note: 'if' and 'else if' always need a conditon to evaluate cannot be blank but not with else, else is independent of conditon always execute when all condition evaluate to false.

//example:

let age = 17;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not yet eligible to vote.");
}

let time;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}