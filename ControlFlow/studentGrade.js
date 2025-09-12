// Student Result Grading:
// Input: 3 subjects ke marks
// Average nikaalo
// Grading:
// 90+ → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Below 60 → Fail
// Agar kisi subject me <33 marks aaye toh "Fail" print karo (average dekhne ki zarurat nahi).

let sub1 = Number(prompt("Enter first subject marks: "));
let sub2 = Number(prompt("Enter second subject marks: "));
let sub3 = Number(prompt("Enter third subject marks: "));

if (sub1 < 33 || sub2 < 33 || sub3 < 33) {
    console.log("You got less than 33 marks in a subject So You are failed. Work hard!");
} else{
    const avg = (sub1 + sub2 + sub3)/3;
    if (avg >= 90) {
        console.log(`Your average is ${Math.floor(avg)}. Grade 'A'. Congratulations!`);
    }else if(avg >=80){
        console.log(`Your average is ${Math.floor(avg)}. Grade 'B'. Very Good!`);
    }else if(avg >=70){
        console.log(`Your average is ${Math.floor(avg)}. Grade 'C'.  Need to work hard.`);
    }else if(avg >60){
        console.log(`Your average is ${Math.floor(avg)}. Grade 'D'. Poor.`);
    }else{
        console.log(`Your average is ${Math.floor(avg)}. You are failed.  Work hard!`);
    }
}