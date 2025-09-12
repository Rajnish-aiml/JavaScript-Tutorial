// 2. Grading System:
// Write a program that takes marks (0–100) and prints the grade:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// Below 60 → Fail

let marks = 86;
if (marks >= 90 ) {
    console.log('Grade A');
} else if (marks >= 80){
    console.log('Grade B');
} else if (marks >= 70){
    console.log('Grade C');
} else if (marks >= 60){
    console.log('Grade D');
} else {
    console.log('Fail');
}

console.log ('\n');

// Q3. Largest of Three Numbers

// Take three numbers as input and print the largest number using only if-else (no Math.max)

let num1 = 6, num2 = 9, num3 = 8;
if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest number`);
}else if (num2 >= num3 ){
    console.log(`${num2} is the largest number`);
}else {
    console.log(`${num3} is the largest number`);
}

// using math.max ()

console.log ('\n');

let x = 364, y = 467, z = 456;

let largest = Math.max(x, y, z);
console.log(`${largest} is the largest number`);

console.log ('\n');