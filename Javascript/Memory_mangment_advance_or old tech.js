
// Guide/warn:---

// As we knew that primitive datatype value stores in the stack memory which is fast compare than non promitive datatype.as
// so sometime we want perfrom predefied fuctions which is given by protoyype libabry through Object 
// that's why crate varibales as non primitive from primtive. but js not recommed bec its complex and slow process.

//using  ---new keyword-- 
//old method
const name = new String('Rahul');
console.log(name.length)

//new method
let hh='demo'
console.log(hh.length)


//importnat terms

//  1)  what is Autoboxing (Ya Primitive Wrapper)

// yhe ek datatype and memory mangment ke bich ka part hai--

// • Kya hai? Jab aap kisi primitive string par 
// dot (.) lagakar koi method call karte hain, 
// toh JavaScript engine background mein automatically use ek temporary object mein badal deta hai.
//  Is process ko Autoboxing kehte hain.

//  • Punchline for Interview: "Primitives don't have methods. 
//  JavaScript uses Autoboxing to temporarily wrap primitives into objects so we can access prototype methods."

//  2) what is Wrapper Objects ?

//  • Kya hai? new String(), new Number(), aur new Boolean() se banne wale objects ko Wrapper Objects kehte hain. 
//  Yeh primitives ke upar ek object ki layer chadha dete hain jo heap memory mein store hoti hai.

//  3) what is Backward Compatibility?

//  • Kya hai? JavaScript se new String() ko isliye nahi hataya gaya taaki purana internet ka code crash na ho.
//   Is property ko Backward Compatibility kehte hain.

//   differnec new string vs normal string

//   normal: yeh ek Type Conversion / Coercion function ki tarah kaam karta hai. Iska kaam hota hai kisi bhi doosre data type ko pakadna aur use ek pure primitive string mein badal dena.
// • Memory: Yeh value ko Stack Memory mein daalta hai.
// • Return Type: Yeh hamesha ek Primitive String return karega.

// new string:
// yeh ek Constructor Function ban jata hai. Yeh string nahi banata, balki string ke upar ek object ka lifafa (wrapper) chadha deta hai.
// • Memory: Yeh actual data Heap Memory mein daalta hai aur stack mein sirf uska address deta hai.
// • Return Type: Yeh hamesha ek Object return karega.










