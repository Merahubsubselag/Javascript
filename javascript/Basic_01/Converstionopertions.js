//String to number

let number=false
let afterconvrtnumber= Number(number)

// '7ragyl8':- value:- nan and type number he hogi
//  null=0,undefined:nan true:1
console.log(afterconvrtnumber)

//let afterconvrtnumber= parseInt(number)
//console.log( typeof number)

console.log(afterconvrtnumber)

// boolean to number


//let boonum='' or boonum='rsrs'
//let boonum='' or boonum=88989

let boonum=''
let booconvert=Boolean(boonum)
console.log(booconvert)


//string convert

let nuu=true
//String() can accept only string value

let nuuconvert= String(typeof nuu)
console.log(nuuconvert)


//Implicit Type Coercion Operators (ya short-cut methods) kehte hain.


//Unary Plus (+) — Convert to Number
//Yeh kisi bhi cheez ko Number banane ke liye use hota hai.


• +"42" → 42
• +"" → 0 (Khali string hamesha 0 banti hai)
• +true → 1 / +false → 0
• +null → 0
• +undefined → NaN
• +"Rahul" → NaN

//Double NOT (!!) — Convert to Boolean

// kisi bhi value ke aage do baar exclamation mark (!!) laga dete hain, toh woh value Boolean (true/false) mein badal jaati hai.
// Yeh kaam kaise karta hai?
// • Pehla ! value ko ulti boolean mein badalta hai (Invert).
// • Doosra ! use wapas sahi karke uski asli boolean value de deta hai.





// 🔴 Falsy Values (Yeh sab hamesha false banenge)
console.log(!!"");          // false (Khali string)
console.log(!!0);           // false (Zero number)
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!NaN);         // false

// 🟢 Truthy Values (Baki sab true banenge)
console.log(!!"Rahul");     // true (Bhri hui string)
console.log(!!55);          // true (Any non-zero number)
console.log(!!{});          // true (Khali object bhi true hota hai!)
console.log(!![]);          // true (Khali array bhi true hota hai!)

//Khali String Concatenation (+ "") — Convert to String

//Agar aapke paas koi Number ya Boolean hai aur aap uske aage + "" 
// (plus khali string) likh dete hain, toh JavaScript use bina kisi function ke String mein badal deta hai.

let score = 500;
let stringScore = score + ""; 

console.log(stringScore);        // Output: "500"
console.log(typeof stringScore); // Output: "string"

console.log(true + "");          // Output: "true" (String ban gaya)
console.log(null + "");          // Output: "null" (String ban gaya)


 //------------------  operations --------------


let value=6
let negvalue=-value
//console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
//console.log((2+3)*6/78)

let str1 ='hii'
let str2='world'
let str3= str1+str2
// console.log(str3)

// ----  main ---
1)
// console.log('1'+2);
// console.log(1+'2');
// console.log('1'+2+2);
// console.log(1+2+'2');
2) 
//this is also under in coversion with this + not increment true value from 1 to 2 but it covert value true to 1 
// console.log(+true);
//log
// console.log(+'');
3)

let num1,num2,num3;
num3=num1=num2=2+2 //bad partices

// console.log(num2)
4)

//pro fix and pre fix opeatores mdn 
 // operator predence

let counter=78
++counter
// console.log(78)
