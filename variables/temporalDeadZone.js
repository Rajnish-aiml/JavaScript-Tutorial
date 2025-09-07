// Temporal Dead Zone: the area in which js known the variable exist but it cannot give value after the deceleration of variable.

// TDZ = time between hoisting & initialization.

// let aur const variables declare hote hain lekin tab tak access nahi kar sakte jab tak unko assign nahi kar dete.

// Agar TDZ me access karoge → ReferenceError.




console.log(a);



let a = 5;
//means let a ke liye line no 1 se line 15 tak TDZ hai js ko pta toh hai 'a' naam ka koi variable exits karta hai but value nhi de sakta. And same for const variable also.
console.log(a); //TDZ ends here

// but in case of var error nhi deta hai, balki undefined value deta hai because of hoisting.

// var ko initialization karne se pahle se pahle acces kar sakte hai that's why give undefined value instead of error but TDZ is also same here.