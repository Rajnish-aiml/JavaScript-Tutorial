// Hoisting: when we decelear a variable in js, then variable split into two parts, a decleration part that sifts uppermost part (line 1) and initialization part remains at the same position where variable is created.

// its means when we create variable like let a = 5; , it splits into two parts like let a = undefined(sifts upparmost part line 1 but we cann't acces it coz let doesn't allow it before initialization it remains in its TDZ but var does) and a = 5; 

// JavaScript engine code ko execution se pehle scan karta hai.
// Variables aur functions ko memory me “reserve” kar leta hai.
// Is process ko Hoisting bolte hain.