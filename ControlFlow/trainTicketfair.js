// Train Ticket Fare:
// Input: Distance (km), Age, Travel Class (Sleeper/AC)
// Rules:
// Sleeper = ₹1/km, AC = ₹2/km
// Child (<12) → 50% discount
// Senior (60+) → 40% discount
// Agar distance > 500 km → 10% extra surcharge (on final price).

let age = Number(prompt("Enter your age(in years): "));
let coachClass = prompt("Enter your coach class(slepper/AC): ").toLowerCase();
let distance = Number(prompt("Enter Distance travelled(in km): "));
let finalTicketPrice;

if (age < 12) {
  if (coachClass === "ac") {
    finalTicketPrice = distance * 2 * 0.5;
  } else {
    finalTicketPrice = distance * 0.5;
  }
} else if (age >= 12 && age <= 60) {
  if (coachClass === "ac") {
    finalTicketPrice = distance * 2;
  } else {
    finalTicketPrice = distance;
  }
} else {
  if (coachClass === "ac") {
    finalTicketPrice = distance * 2 * 0.4;
  } else {
    finalTicketPrice = distance * 0.4;
  }
}

if (distance > 500) {
  finalTicketPrice *= 1.10; // 10% surcharge over 500km
}

console.log(
  `since you travelled distance ${distance}km in ${coachClass} coach, so your final ticket price is ₹${Math.floor(finalTicketPrice)}. Wish you a happy journey.`
);


// by using ternary operator:

