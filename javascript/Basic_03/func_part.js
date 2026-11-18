// funtion

function classicfunction()  // 
{
  console.log("classic function")
}

classicfunction();
const expressionfunction = function () {
  console.log(`this is expression function`)
}

expressionfunction();

const paramterefunction = function (name) {
  console.log(`This is parameter function passing this name = ${name}`)
}
paramterefunction('rahul');

const defaultparmenet = function (Default = 'sample') {
  if (Default == undefined) {
    return `this is by passed parameter ${Default}`;
  }
  return `this is by default parameter ${Default}`;
}

console.log(defaultparmenet());

const unlimtedparameter = (...first) => {
  return `we dont know some time how many data will come from paramneter then use rest ... paramenter${first}`
}
console.log(unlimtedparameter('first', 'second', 'third'));

const arrowfunction = () => {
  return `this is arrow function which is intro by ec6`;
}

console.log(arrowfunction());

const objectpass =
{
  objectid: 101,
  objectname: 'sample',
  passed: false,
  message: () => {
    return `this is object message of ${this.objectname}`
  },
  objectarray: ["yhe ek string hai", true, 6767, obj = { 'objname': 'name', sample: true }]
}

// objects pass with functions
const objpasswith = (obj) => ({ objectid: 101, objectname: 'sample', passed: false, })
console.log(objpasswith());


// objects pass with functions // Implist return function[]
const objpasswithanother = (obj) => (objectpass)

console.log(objpasswithanother());

//  (IIFE) this function quikly worked

(function () {
  return `sample is good for self`;
})();

// Scope with nested
const nestedfunction = function () {
  const firstname = 'Rahul'

  const innerfunction = () => {
    let lastname = "kumar"
    return firstname + lastname // Lexical Scope ya Closure kehte hain.

  }
  innerfunction();
  console.log(lastname)

}


nestedfunction();

// Parent function bus load wala kam karta hai memory mai first time second time jab 
// var bnakar use karte hai tab fr child he apna kam karta hai
// closure sirf nested functions (function ke andar function) me hi kaam karta hai.


function outer() {
  let secret = "Rahul123";

  function inner() { // <--- Ye hai Nested Function
    console.log(secret); // Inner ko outer ke 'secret' ka access mil gaya (Closure!)
  }

  return inner;
}

const myFn = outer();
myFn(); // Output: Rahul123

//ex2

function grandFather() {
  let dadaJiKaData = "Zameen ke kaagaz"; // Grandfather ka variable

  function father() {
    let papaJiKaData = "Nayi Car"; // Father ka variable

    function child() { // <--- Sabse andar wala function
      // Yeh dono variables ko access kar sakta hai!
      console.log("Mujhe mila: " + dadaJiKaData + " aur " + papaJiKaData);
    }

    return child;
  }

  return father;
}

// Ab isko run karke dekhte hain:
const getFather = grandFather(); // grandFather ka kaam khatam
const getChild = getFather();    // father ka kaam bhi khatam

getChild();
// Output: Mujhe mila: Zameen ke kaagaz aur Nayi Car




// Async Functions
//Constructor Function (ऑब्जेक्ट बनाने वाला फ़ंक्शन)
// Pure & Impure Functions ((Pure जैसे: (a, b) => a + b). Impure जैसे Math.random() या new Date())
//Higher-Order Functions (HOF): दूसरे फ़ंक्शन को अपने पैरामीटर में लेते हैं, 
// या पूरा का पूरा फ़ंक्शन ही रिटर्न कर देते हैं। (जैसे JavaScript के इन-बिल्ट फ़ंक्शंस: map(), filter(), reduce())
// Callback Function :क फ़ंक्शन के अंदर दूसरे फ़ंक्शन को एज़ अ पैरामीटर (Argument) पास करते हैं, ताकि वह बाद में रन हो सके
//ex

function sayBye() {
  console.log("bye done work");
}

function startWork(taskName, myCallback) {
  console.log(`${taskName} work is worling...`);


  myCallback();
}
startWork("file dowbload", sayBye);


//************ differnec btw arrow function and normal function  ******
//
const user = {
  name: "Rahul",

  // 1. ✅ NORMAL METHOD (Apna context pakadta hai)
  sayHelloNormal: function () {
    console.log("Normal Method:", this.name); // Output: Rahul
  },

  // 2. ❌ ARROW METHOD (Apna context nahi hota)
  sayHelloArrow: () => {
    console.log("Arrow Method:", this.name);  // Output: undefined
  },

  // 3. 🎯 TIMER FUNCTION (Jahan arrow function ne normal function ki help ki!)
  showWithInterval: function () {
    // setInterval ek inbuilt function hai jo har 1 second baad chalega
    setInterval(() => {
      // Kyunki yahan arrow function use hua hai, iska apna 'this' nahi hai.
      // Yeh apne bahar wale (showWithInterval) ka 'this' udhaar le lega, jo ki 'user' hai!
      console.log("Timer ke andar Arrow ki help se:", this.name); // Output: Rahul (Har 1 second baad)
    }, 1000);
  }
};
//************** end*************

// Teeno ko upar-niche chala kar dekhte hain:
user.sayHelloNormal();   // Output: Rahul
user.sayHelloArrow();    // Output: undefined
user.showWithInterval(); // Output: Rahul (Har 1 second mein print hota rahega)


// ❌ Purana Tarika (Normal Function) - 3 lines ka code
function addNormal(a, b) {
  return a + a;
}

// 😎 Modern Tarika (Arrow Function) - Sirf 1 line mein!
const addArrow = (a, b) => a + b;
const numbers =;

// ❌ Normal Function se - Code bada aur faila hua lagta hai
const doubleNormal = numbers.map(function (num) {
  return num * 2;
});

// 😎 Arrow Function se - Ekdam punchy aur saaf
const doubleArrow = numbers.map(num => num * 2);

console.log(doubleArrow); // Output: [2, 4, 6, 8]

