let phone=6767;
//number to string
let demo= phone.toString().length
// console.log(typeof demo)

// 
let demo1=phone.valueOf()
// console.log(demo1)

let demo2=phone.toFixed(4)
// console.log(demo2)


let demo3=phone.toPrecision(4)
//console.log(demo3)


let demo4=phone.toLocaleString(1)
console.log(demo4)


let demo5=phone.toExponential(1)
console.log(demo5)


// what is Type Conversion / Coercion / Data Type Transformation?
// phone.toString()	Ek Text value ("6767")	"string"	Type Conversion / Coercion / Data Type Transformation
// what is Method Chaining?
// phone.toString().length	Characters ka count (4)	"number"	Method Chaining


// -------------  Math---------------


console.log(Math);


let pp=(Math.abs(-87)); // abs(absulute value only - to + not + to - and also covert itno string to number but not chart)
//console.log(pp)
let numm=8.8
//console.log(Math.round(numm));
//console.log(Math.ceil(numm)); ceil mtlb jada round off
//console.log(Math.floor(numm)); //floor mtlb kam round off
//console.log(Math.sqrt(numm));
// console.log(Math.min(2,4,56,1,78)); //findout lowest value in Array with math function
// console.log(Math.max(2,4,56,1,78)); //findout higest value in Array

// random important

console.log(Math.random()); // value give random value btw 0 and 1 it wiil give also float values.

//but i want only single charcter value then i will less round off

console.log(Math.random(Math.floor)); // it will not - support -neg that why under 0 to 1
console.log(Math.random() *10); //value jada karne ke lea  *10 
console.log(Math.floor((Math.random() *10)+1)); //value jada lane  ke lea // 0.00 value na aaye es leye +1
 //now we can add min and max value also

 const min=30
 const max=80

 //standard formula is this
 console.log(Math.floor(Math.random () *(max-min+1))+min); // +min use for srt random value from only min value

 (max-min+1)// range set ke plus zero avoid value 0.0
 













