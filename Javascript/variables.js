// var keyword is old and in js have some limitaions for scope wise in block scope and functional scope that why not too much use..
"use strict"
//1
 var name='rahul' 

 //2
bla = 2;
var bla;
console.log(bla)

//3
function testvar()
{ 
console.log(mm)
var mm=8
} 

testvar();
//4
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();

//5
if(true)
{
    var checkif=59
}
console.log(checkif)

let country;
let time=22.45

//var a=10 tab number pick kare ga

function a() {} // 1. Function sabse upar chala gaya
var a;          // 2. var a upar aaya, par computer ne ise ignore kiya kyunki a pehle se ek function hai.

console.log(typeof a); // "function" (Kyunki 'a' ek function hai)
console.log(typeof a); // "function" (Abhi bhi 'a' function hi hai)


//so variable ko same name se inialize and decalre kar sakte hai yhe problem aayi fr es ke lea let aaya 

function lettcheck()
{  
    console.log(a)
      let a=20
}
lettcheck();

//2 function lettcheck()
function lettcheckanother()
{ let a=20
    //console.log(a) 
}
 console.log(a) 
lettcheckanother();

let a=20;
function lettcheckanotherone()
{ 
    a='hii';
    console.log(a) 
}

lettcheckanotherone();

function lettcheckanothertwo()
{ 
    a='hii';
    console.log(a) 
}
console.log(a)
lettcheckanothertwo();

if(true)
{
    var num=69
     console.log(window.num)
  
}
  console.log(num)
  // let is blocked scope


rahulcity='chd'
console.log(rahulcity)
  
// ***  wihout var let const it will be stored in  brower main window object par ek propetie bna dega sample like alert console values, this is called implict global varible

time='56'
const Time=44.00


// let cout =10
// {
//  var cout=78

// }

let x= x+10
console.log(x)


// particess
//Type of errors

// • SyntaxError = Likhne ka tareeka galat hai.
// • ReferenceError = Wo variable/naam hi gayab hai (exist nahi karta).
// • TypeError = Variable toh hai, par aap uske sath galat kaam kar rahe hain (Jaise ghoode ko gaadi ki tarah udane ki koshish karna, 
//    ya const ko badalna, ya number ko uppercase karna).



//  Scope Kya Hai? (Aapki Limit/Boundary)

// Scope ka matlab hai Aapka variable aapke code me kahan tak zinda hai. Agar aap kisi variable ko uski boundary ke bahar use karne ki koshish karoge, toh JS error de dega: ReferenceError: variable is not defined.
// JavaScript me main do tarah ke scope hote hain:
// • Global Scope: Jo variable kisi function ke bahar khule me likha ho. Ise poore code me kahin se bhi use kiya ja sakta hai.
// • Local / Function Scope: Jo variable kisi function ke andar { } ke beech me likha ho. Ise sirf usi function ke andar use kar sakte hain, bahar se access nahi kar sakte.

// 2. Lexical Environment Kya Hai? (Upar Dekhne Ka Rule)

// "Lexical" ka simple matlab hota hai "Kahan likha hua hai".
// Jab aap kisi function ke andar koi variable dhoondte ho aur wo wahan nahi milta, toh JavaScript ka engine apne parent (apne se upar wale) area me jaakar us variable ko dhoondta hai. Is poore system ko Lexical Environment kehte hain.


// Short Notes Jo Aapko Yaad Rakhne Hain:

// 1. Andar se bahar dekhna allowed hai (Child apne Parent ka data access kar sakta hai).
// 2. Bahar se andar dekhna block hai (Parent apne Child ka local data access nahi kar sakta).



                    //  🔥 ERROR DETECTION QUIZ 🔥

// [QUESTION 1]
// ----------------------------------------------------------------------
// Code:
let score = 99;
Score = 100;
console.log(score);


// [QUESTION 2]
// ----------------------------------------------------------------------
// Code:
let userName = "Amit";
userName();


// [QUESTION 3]
// ----------------------------------------------------------------------
// Code:
const pi = 3.14;
pi = 3.15;



// [QUESTION 4]
// ----------------------------------------------------------------------
// Code:
let isLoggedin = true;
if (isLoggedin == true) 
{
    console.log"Welcome")
}


// [QUESTION 5]
// ----------------------------------------------------------------------
// Code:
let userAge = 25;
userAge.toUpperCase();



// [CHALLENGE QUESTION A]
// ----------------------------------------------------------------------
// Code:
let user = null;
console.log(user.email);


// [CHALLENGE QUESTION B]
// ----------------------------------------------------------------------
// Code:

let fruits = ["Apple", "Banana"];
fruits.push("Mango");
fruits = "Orange";
console.log(fruits);


