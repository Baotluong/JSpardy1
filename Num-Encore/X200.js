let x = 0;

console.log(++x); // 1 1 1
console.log(x++); // 2 1 2
console.log(x) // 2 0 2
console.log("1" +  "1" + "2"); // "112" "112" '112'
console.log(1 - 1 + "2"); // "02" error '02'
console.log( "A" - "B" + 2); //error error 'A2' NaN
console.log( "A" - "B" + "2"); //error error 'A2' NaN2

// What is the result? You can get 2 wrong.
