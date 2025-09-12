// Q1. Movie Ticket Price Calculator
// Take age and day as input:
// If age < 12 → ticket = ₹100
// If age >= 12 and age <= 60 → ticket = ₹200
// If age > 60 → ticket = ₹150
// 👉 Extra: If day = "Wednesday" → 20% discount

console.log("Moive Ticket Calculator:");
let age = Number(prompt("Enter your age: "));
let day = prompt("Enter day:").toLowerCase();

if (age < 12) {
    if (day === "wednesday") {
        console.log("since you are under 12 and we have given extra discount of 20% on wednesday.");
        console.log(` So, your final Movie ticket price will be only ₹80.`);
    }else {
        console.log("since you are under 12, your ticket price will be ₹100.");
    }
}else if(age >= 12 && age <= 60){
    if (day === "wednesday") {
        console.log("since you are above 12 and we have given extra discount of 20% on wednesday.");
        console.log(" So, your final Movie ticket price will be only ₹160.");
    }else {
        console.log("since you are above 12, your ticket price will be ₹200.");
    }
} else{
    if (day === "wednesday") {
        console.log("since you are a senior citizen and we have given extra discount of 20% on wednesday.");
        console.log(" So, your final Movie ticket price will be only ₹120.");
    }else{
        console.log("since you are a senior citizen, your ticket price will be only ₹150.");
    }
}



// Q2.) Cinema Ticket with Age + Day Discount (Level Up)
// Base price: ₹200
// Child (<=12) → 50% discount
// Senior (60+) → 25% discount
// Monday aur friday ko sabke liye extra 20% discount final price pe
// Final ticket price print karo


let basePrice = 200;
let finalPrice;
let yourAge = Number(prompt("Enter your age: "));
let offerday = prompt("Enter the day: ").toLowerCase();

if (yourAge <= 12) {
    finalPrice = (basePrice - (basePrice *.5))
    if (offerday === "monday" || offerday === "friday") {
        finalPrice -= (finalPrice * .2);
    }
} else if(yourAge > 12 && yourAge <= 60){
    finalPrice = basePrice;
    if (offerday === "monday" || offerday === "friday") {
        finalPrice = (basePrice - (basePrice * .2));
    }
} else{
    finalPrice = (basePrice - (basePrice *.25))
    if (offerday === "monday" || offerday === "friday") {
        finalPrice -= (finalPrice * .2);
    }
}

console.log(`your ticket price is ₹${finalPrice}`);