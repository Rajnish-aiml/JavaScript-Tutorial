// 1. Write a program that generates the following pattern using loops:
// *
// * *
// * * *
// * * * *
// * * * * *

{
  let rowNum = 5;
  for (let i = 1; i <= rowNum; i++) {
    let pattern = ""; // empty string for each row
    for (let j = 1; j <= i; j++) {
      pattern += "* "; // add * to pattern
    }
    console.log(pattern);
  }
}

// 2. Write a program that generates the following pattern using loops:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

{
  console.log("\n");
  let rowNum = 5;
  for (let i = 1; i <= rowNum; i++) {
    let pattern = "";
    for (j = 1; j <= rowNum; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// 3. Write a program that generates the following pattern using loops:
// * * * * *
// * * * *
// * * *
// * *
// *

{
  console.log("\n");
  let rowNum = 5;
  for (let i = 1; i <= rowNum; i++) {
    let pattern = "";
    for (j = 1; j <= rowNum + 1 - i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
}

// 4. Write a program that generates the following pattern using loops:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

{
  console.log("\n");
  let rowNum = 6;
  for (let i = 1; i <= rowNum; i++) {
    let row = "";
    for (j = 1; j <= rowNum - i; j++) {
      row += " ";
    }
    for (k = 1; k <= i; k++) {
      row += "* ";
    }

    console.log(row);
  }
}

// 5. Write a program that generates the following pattern using loops:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

{
  console.log("\n");
  let rowNum = 5;
  for (let i = 1; i <= rowNum; i++) {
    let row = "";
    for (j = 1; j <= rowNum - i; j++) {
      row += "  ";
    }
    for (k = 1; k <= i; k++) {
      row += "* ";
    }

    console.log(row);
  }
}
console.log("\n");