// var keyword is old and in js have some limitaions for scope wise in block scope and functional scope that why not too much use..

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
    let num=69
     //console.log(num)
  
}
  console.log(num)
  // let is blocked scope



  
rahulcity='chd'

time='56'
const Time=44.00

















// particess
//Type of errors

// • SyntaxError = Likhne ka tareeka galat hai.
// • ReferenceError = Wo variable/naam hi gayab hai (exist nahi karta).
// • TypeError = Variable toh hai, par aap uske sath galat kaam kar rahe hain (Jaise ghoode ko gaadi ki tarah udane ki koshish karna, 
//    ya const ko badalna, ya number ko uppercase karna).





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
