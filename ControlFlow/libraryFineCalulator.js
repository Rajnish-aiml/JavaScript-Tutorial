// Library Fine Calculator:
// Return within 7 days → No fine
// 8–14 days late → ₹2 per day
// 15–30 days late → ₹5 per day
// 30+ days late → Membership cancelled

let lateDay = Number(prompt("Enter the number of days: "));
let totalLateFine = 0;

if (lateDay <= 7) {
    totalLateFine = 0;
    console.log("No late fine for you. Enjoy!");
} else if(lateDay >= 8 && lateDay <=14){
    totalLateFine = (totalLateFine + (lateDay - 7) * 2)
    console.log("₹",totalLateFine, "is your total late fine.");
} else if(lateDay >= 15 && lateDay <= 30){
    totalLateFine = (totalLateFine + (lateDay - 7) * 5);
    console.log(`₹${totalLateFine} is your total late fine.`);
} else{
    console.log("we have cancelled your Membership for returning books after 30 days.");
}