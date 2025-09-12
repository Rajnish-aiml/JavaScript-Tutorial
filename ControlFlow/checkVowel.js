// Character Check (Vowel/Consonant/Digit/Special Symbol)
// Take a single character as input. Check if it is:
// A vowel (a, e, i, o, u)
// A consonant
// A digit (0–9)
// A special character (anything else)


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a single character from keyboard: ", (ch) => {
    if (ch.length !== 1) {
        console.log("Please enter only one character.");
        rl.close();
        return;
    }

    const char = ch.toLowerCase();

    if ("aeiou".includes(char)) { // check for vowel
        console.log("it's a vowel.");
    } else if (/[a-z]/.test(char)){ // check for consoment
        console.log("it's consonent.");
    } else if(/[0-9]/.test(char)){
        console.log("it's a digit.");
    } else{
        console.log("its a special character.");
    }
  rl.close();
});

// normal approach

const char = prompt("Enter a single character from keyboard: ").toLowerCase();// this will only work in browser.

if (char ==="a" || char === "e" || char ==="i" || char === "o" || char === "u") {
    console.log("it's a vowel.");
} else if (char >= "a" && char <="z") {
    console.log("it's a consonent.");

} else if(char >= "0" && char <= "9") {
    console.log("it's a digit.");
} else{
    console.log("it's a special character.");
}
