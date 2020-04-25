var a={};
var b={key:'b'};
var c={key:'c'};

console.log(a.moo) // undefined
a[b]=123;
console.log(a.undefined) // 123
a[c]=456;

console.log(a[b]); // 123 error undefined 456
// What is the result?
