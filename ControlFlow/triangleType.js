// Q5. Triangle Type Checker
// Write a program that takes three sides of a triangle as input and checks:
// If all sides are equal → Equilateral
// If two sides are equal → Isosceles
// If all sides are different → Scalene

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter 1st side: ", (answer) => {
    let side1 = Number(answer);

    rl.question("Enter 2nd side: ",(answer) => {
        let side2 = Number(answer);

        rl.question("Enter 3rd side: ",(answer) =>{
            let side3 = Number(answer);
        
        // it will check triangle is valid or not.... 
        if (side1+side2>side3 && side1+side3>side2 && side2+side3>side1) {
            if (side1===side2 && side2===side3) {
                console.log("Since all sides are equal, it's a Equilateral triangle.");
            } else if(side1===side2 || side2===side3 || side1===side3){
                console.log("Since two sides are equal, it's a Isosceles triangle.");
            } else{
                console.log("since all sides are different, it's a Scalene triangle.");
            }
        } else{
            console.log("since you are not giving right triangle side, it's not a valid triangle!");
        }
       rl.close();
    });
   });
});