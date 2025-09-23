// Write a javascript program to check a given number is Armstrong number or not.

// Armstrong number check in JavaScript

{
  function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length; // Count total digits

    while (temp > 0) {
      let digit = temp % 10; // last digit
      sum += Math.pow(digit, digits); // digit ^ total digits
      temp = Math.floor(temp / 10); // remove last digit
    }

    if (sum === num) {
      console.log(num + " is an Armstrong number.");
    } else {
      console.log(num + " is NOT an Armstrong number.");
    }
  }

  // Example test
  isArmstrong(153); //  Armstrong
  isArmstrong(9474); //  Armstrong
  isArmstrong(123); //  Not Armstrong
}

const user = {
  name: "rajnish",
  details: {
    age: 20,
    male: true,

    addresh: {
      pin: 834363,
      att: "hjs",
    },
  },
};

user.details.addresh.att