// Write a program that takes a year as input and checks if it is a leap year or not.


// // 1 approach:

// // let year = 2008;
// if (year % 4 ===0 && year % 100 !== 0 || year % 400 === 0) { // check for both normal and hundred year
//     console.log(`${year} is a leap year`);
// } else {
//     console.log(`${year} is not a leap year`);
// }

// console.log("\n");

// // 2 approach


// // let checkYear = 2004;
// if (checkYear % 4 === 0) {
//     if(checkYear % 400 ===0 || checkYear % 100 !== 0)
//         console.log(`${checkYear} is a leap year`);
//     else {
//         console.log(`${checkYear} is not a leap year`);
//   }
// } else {
//     console.log(`${checkYear} is not a leap year`);
// }


// // 3 approach

// console.log("\n");

// // let yearcheck = 2000;
// if (yearcheck % 4 === 0 && yearcheck % 100 !== 0) {
//     console.log(`${yearcheck} is a leap year`);
// } else if (yearcheck % 400 === 0) {
//     console.log(`${yearcheck} is a leap year`);
// } else {
//     console.log(`${yearcheck} is not a leap year`)
// }




const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// alag alag line mein multiple input using readline in node.js

rl.question("Enter first year: ", (answer1) => {
  const year = Number(answer1);

  rl.question("Enter second year: ", (answer2) => {
    const checkYear = Number(answer2);

    rl.question("Enter third year: ", (answer3) => {
      const yearcheck = Number(answer3);

      // 1st approach
      console.log('\n');
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`);
      } else {
        console.log(`${year} is not a leap year`);
      }

      console.log("\n");

      // 2nd approach
      if (checkYear % 4 === 0) {
        if (checkYear % 400 === 0 || checkYear % 100 !== 0)
          console.log(`${checkYear} is a leap year`);
        else console.log(`${checkYear} is not a leap year`);
      } else {
        console.log(`${checkYear} is not a leap year`);
      }

      console.log("\n");

      // 3rd approach
      if (yearcheck % 4 === 0 && yearcheck % 100 !== 0) {
        console.log(`${yearcheck} is a leap year`);
      } else if (yearcheck % 400 === 0) {
        console.log(`${yearcheck} is a leap year`);
      } else {
        console.log(`${yearcheck} is not a leap year`);
      }
      
      console.log('\n');
      rl.close();
    });
  });
});



// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // multiple input in using readline in node.js

// rl.question("Enter 3 years separated by space: ", (answer) => {
//   // answer ek string hai, split karke array me convert kar rahe
//   const [year, checkYear, yearcheck] = answer.split(" ").map(Number);

//   // 1st approach
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
//   } else {
//     console.log(`${year} is not a leap year`);
//   }

//   // 2nd approach
//   if (checkYear % 4 === 0) {
//     if (checkYear % 400 === 0 || checkYear % 100 !== 0)
//       console.log(`${checkYear} is a leap year`);
//     else console.log(`${checkYear} is not a leap year`);
//   } else {
//     console.log(`${checkYear} is not a leap year`);
//   }

//   // 3rd approach
//   if (yearcheck % 4 === 0 && yearcheck % 100 !== 0) {
//     console.log(`${yearcheck} is a leap year`);
//   } else if (yearcheck % 400 === 0) {
//     console.log(`${yearcheck} is a leap year`);
//   } else {
//     console.log(`${yearcheck} is not a leap year`);
//   }

//   rl.close();
// });